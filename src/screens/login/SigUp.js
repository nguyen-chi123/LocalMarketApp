import React, {useState}from "react";
import {View, StyleSheet, Text, Alert, Pressable, TextInput, AsyncStorage} from "react-native";
import {ButtonAllGreen, commonStyles} from "../../components";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import color from "../../assets/color";
import {useValidation} from "react-native-form-validator";
// import AsyncStorage from "@react-native-async-storage/async-storage"

const SigUp = ({navigation}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const { validate, isFieldInError, getErrorsInField} =
    useValidation({
      state: {name, phone, pass, repass},
    });

  const _userSignUp = async () => {
    const check = validate({
      name: {required: true},
      phone: { required: true, numbers: true},
      pass: { required: true, minlength: 8},
      repass: { equalPassword: pass, required: true},
    });
    if (!check) return false
    try {
      const res = await fetch(BASE_URL + '/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          phone_number: phone,
          password:pass,
          password_confirmation: repass
        })
      })
      const data = await res.json();
      if (!data.success) {
        console.log(data)
        return Alert.alert(
          "Số điện thoại đã tồn tại",
          "",
          [{text: "Ok"}]
        )
      }
      return navigation.navigate("SigUpConfirm", {phone: phone, pass: pass})

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.root}>
      <View style={styles.spaceTop}>
        <TextInput style={commonStyles.input} placeholder="Tên hiển thị"
          onChangeText={name => setName(name)}
          value={name}
        />
        {isFieldInError('name') && getErrorsInField('name') ? <Text style={commonStyles.textError}>Cần nhập tên </Text> : null}
      </View>
      <View style={styles.spaceTop}>
        <TextInput style={commonStyles.input} placeholder="Số điện thoại" onChangeText={phone => setPhone(phone)} value={phone}/>
        {isFieldInError('phone') && getErrorsInField('phone') ? <Text style={commonStyles.textError}>Số điện thoại không hợp lệ</Text> : null}
      </View>
      <View style={styles.spaceTop}>
        <TextInput style={commonStyles.input} placeholder="Mật khẩu" onChangeText={setPass} value={pass} secureTextEntry={true}/>
        {isFieldInError('pass') && getErrorsInField('pass') ? <Text style={commonStyles.textError}>Mật khẩu tối thiểu 8 ký tự</Text> : null}
      </View>
      <View style={styles.spaceTop}>
        <TextInput style={commonStyles.input} placeholder="Nhập lại mật khẩu" onChangeText={setRepass} value={repass} secureTextEntry={true}/>
        {isFieldInError('repass') && getErrorsInField('repass') ? <Text style={commonStyles.textError}>Mật khẩu không khớp</Text> : null}
      </View>
      <View style={styles.spaceTopBtn}>
        <ButtonAllGreen
          title="Đăng ký"
          onPress={_userSignUp}
          // onPress={() => navigation.navigate('SigUpConfirm')}
        />
      </View>
      <View style={styles.LogInBottom}>
        <View>
          <Text style={styles.textNormal}>Bạn đã có tài khoản? </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textStrong}> Đăng nhập ngay</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SigUpConfirm = ({ route, navigation }) => {
  const { phone, pass } = route.params;
  const _checkOTP = async (value) => {
    try {
      const res = await fetch(BASE_URL + '/checkOTP', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone_number: phone,
          password: pass,
          code: value
        })
      })
      const data = await res.json();
      console.log(data);
      if (!data.success) {
        return Alert.alert(
          "Xảy ra lỗi",
          "Mã OTP không hợp lệ",
          [{text: "Ok"}]
        );
      }
      await AsyncStorage.setItem(STORAGE_KEY, data['access_token'])
      console.log(STORAGE_KEY)
      console.log(await AsyncStorage.getItem(STORAGE_KEY))
      return navigation.navigate("HomeScreen")

    } catch (e) {
      console.log(e);
    }

  }

  return(
    <View style={styles.container}>
      <Text style={styles.message}>Nhập mã OTP được gửi qua tin nhắn SMS đến</Text>
      <Text style={styles.phone}>{phone}</Text>
      <OTPInputView
        pinCount={6}
        style={styles.otpView}
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={value => _checkOTP(value)}
      />
      <ButtonAllGreen title={"Gửi lại mã"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    height: "100%",
  },
  spaceTop: {
    marginTop: 8,
  },
  spaceTopBtn: {
    marginTop: 16
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  otpView: {
    width: '80%',
    height: 200,
    color: color.text,
  },
  underlineStyleBase: {
    width: 35,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    color: "black",
    borderBottomColor: color.green,
    fontSize: 24,
  },
  message: {
    marginTop: 48,
    color: color.text,
    fontSize: 16
  },
  phone: {
    marginTop: 8,
    fontSize: 20,
    color: "black"
  },
  textStrong: {
    color: color.green,
    fontWeight: "500",
    fontSize: 18,
    textAlign: "right",
  },
  LogInBottom: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  textNormal: {
    fontSize: 16,
    color: "#222",
    marginTop: 16,
  },

});

module.exports = {
  SigUp,
  SigUpConfirm
}
