import React from "react";
import {View, StyleSheet, TextInput, Alert} from "react-native";
import {commonStyles, ButtonAllGreen} from "../../components";

const EditPass = () => {
  const _changePass = async () => {

  }

  return (
    <View style={commonStyles.container}>
      <View style={{marginTop: 10}}><TextInput style={commonStyles.input} placeholder={"Mật khẩu cũ"}/></View>
      <View style={{marginTop: 10}}><TextInput style={commonStyles.input} placeholder={"Mật khẩu mới"}/></View>
      <View style={{marginTop: 10}}><TextInput style={commonStyles.input} placeholder={"Nhập lại mật khẩu mới"}/></View>
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
