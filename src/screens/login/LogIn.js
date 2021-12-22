import React, {useState} from "react";
import {Text, View, StyleSheet, Pressable, AsyncStorage, TextInput, Alert} from "react-native";
import {InputBox, ButtonAllGreen, commonStyles} from "../../components";
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from "../../assets/color";

const LogInButton = (props) => {
  return (
    <Icon.Button name={props.name} backgroundColor={props.bgColor} height={50}
      iconStyle={styles.iconBt}
      onPress={props.onPress}
    >
      <Text style={styles.textButton}>
        {props.title}
      </Text>
    </Icon.Button>
  );
};

const LogInFast = () => {
  return (
    <View>
      <Text style={styles.title}>Local Market</Text>
      <View>
        <LogInButton name="facebook" bgColor="#3b5998" title="Đăng nhập với Facebook"/>
      </View>
      <View style={styles.spaceTop}>
        <LogInButton name="google" bgColor="#e94235" title="Đăng nhập với Gmail"/>
      </View>
    </View>
  )
}

const LogIn = ({navigation}) => {
  const [phone, setPhone] = useState(null)
  const [pass, setPass] = useState(null)

  const _userLogIn = async () => {
    try {
      // const res = await fetch(BASE_URL + '/login', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     phone_number: phone,
      //     password: pass
      //   })
      // })
      // const data = await res.json()
      // console.log(data)
      // if (!data.success) {
      //   return Alert.alert(
      //     "Không thành công",
      //     "SĐT hoặc mật khẩu không chính xác",
      //     [{title: "Cancel"}]
      //   )
      // }
      // await AsyncStorage.setItem(STORAGE_KEY, data["access_token"])
      return navigation.replace("HomeScreen")
    } catch (e) {
      console.log("error in _userLogIn", e)
    }
  }

  return (
    <View style={styles.container}>
      <LogInFast />
      <View style={styles.lineOr}>
        <View style={styles.line} />
        <Text style={styles.desc}>Hoặc</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.logInForm}>
        <TextInput style={commonStyles.input} placeholder="Số điện thoại" onChangeText={setPhone} value={phone}/>
        <View style={styles.spaceTop}>
          <TextInput style={commonStyles.input} placeholder="Mật khẩu" onChangeText={setPass} value={pass}/>
        </View>
        <Pressable onPress={() => navigation.navigate("ForgotPass")}>
          <Text style={[styles.textStrong, styles.space16]}>Quên mật khẩu?</Text>
        </Pressable>
        <ButtonAllGreen
          title="Đăng nhập"
          onPress={_userLogIn}
        />
      </View>
      <View style={styles.LogInBottom}>
        <View>
          <Text style={styles.textNormal}>Bạn chưa có tài khoản? </Text>
        </View>
        <Pressable
          onPress={() => navigation.push("SigUp")}
        >
          <Text style={styles.textStrong}> Đăng ký</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.text,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 24
  },
  desc: {
    marginBottom: 8,
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10
  },
  spaceTop: {
    marginTop: 14
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 8,
  },
  iconBt: {
    fontSize: 30,
    marginLeft: 8
  },
  lineOr: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24
  },
  line: {
    flex: 1,
    marginTop: 10,
    height: 2,
    backgroundColor: "#e5e5e5",
  },
  logInForm: {
    marginTop: 8
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
  space16: {
    marginTop: 16,
    marginBottom: 16
  },

});

module.exports = {
  LogIn,
  LogInFast
}
