import React from "react";
import {Text, TextInput, View, StyleSheet, Pressable} from "react-native";
import {LogInFast} from "./LogIn";
import {ButtonAllGreen, commonStyles} from "../../components";
import {SigUpConfirm} from "./SigUp";

const ForgotPass = ({navigation}) => {


  return (
    <View style={commonStyles.container}>
      <LogInFast />
      <View style={styles.lineOr}>
        <View style={styles.line} />
        <Text style={{color: "#aaa"}}>Nhập số điện thoại</Text>
        <View style={styles.line} />
      </View>
      <TextInput style={[commonStyles.input, styles.space]} placeholder={"Số điện thoại" }/>
      <View style={styles.space}/>
      <ButtonAllGreen
        title="Nhận mã OTP"
        onPress={() => navigation.push("SigUpConfirm")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  space: {
    marginTop: 16
  }
})

export default ForgotPass
