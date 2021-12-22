import React from "react";
import {Text, Pressable, StyleSheet} from "react-native";
import color from "../assets/color";

const ButtonAllGreen = (props) => {
  return (
    <Pressable style={[styles.button, styles.allGreen]} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const ButtonAllRed = (props) => {
  return (
    <Pressable style={[styles.button, styles.allRed]} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const ButtonGreen = (props) => {
  return (
    <Pressable style={[styles.button, styles.green]} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  allGreen: {
    backgroundColor: color.green,
  },
  allRed: {
    backgroundColor: color.red,
  },
  green: {
    color: color.green,
    backgroundColor: "#fff",
    height: 46,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

module.exports = {
  ButtonAllGreen,
  ButtonAllRed,
  ButtonGreen
}
