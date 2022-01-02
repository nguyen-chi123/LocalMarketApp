import React, {useState} from "react";
import {View, StyleSheet, TextInput, Alert, AsyncStorage} from "react-native";
import {commonStyles, ButtonAllGreen} from "../../components";

const EditPass = ({navigation}) => {
  const [pass, setPass] = useState(null);
  const [newPass, setNewPass] = useState(null);
  const [reNewPass, setReNewPass] = useState(null);

  const _changePass = async () => {
    const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    try {
      const res = await fetch(BASE_URL + "/reset-password", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
          password: pass,
          new_password: newPass,
          new_password_confirmation: reNewPass
        })
      });
      const data = await res.json();
      console.log(data)
      Alert.alert(
        data.message,
        "",
        [{text: "Ok"}]
      )
      if (!data.success) return;
      return navigation.goBack();

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={commonStyles.container}>
      <View style={{marginTop: 10}}>
        <TextInput style={commonStyles.input} placeholder={"Mật khẩu cũ"} value={pass} onChangeText={setPass}/>
      </View>
      <View style={{marginTop: 10}}>
        <TextInput style={commonStyles.input} placeholder={"Mật khẩu mới"} value={newPass} onChangeText={setNewPass}/>
      </View>
      <View style={{marginTop: 10}}>
        <TextInput style={commonStyles.input} placeholder={"Nhập lại mật khẩu mới"} value={reNewPass} onChangeText={setReNewPass}/>
      </View>
      <View style={{marginTop: 34}}>
        <ButtonAllGreen
          title={"Đổi mật khẩu"}
          onPress={_changePass}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

})

export default EditPass
