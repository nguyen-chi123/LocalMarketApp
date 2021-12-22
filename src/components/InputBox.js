import React from "react";
import {TextInput, StyleSheet} from "react-native";

const InputBox = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};
const InputPass = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      // secureTextEntry={true}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#B9B9BB",
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 16,
    backgroundColor: "#fff"
  }
});

export default InputBox
