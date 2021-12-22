import React from "react";
import {StyleSheet} from "react-native";
import color from "../assets/color";

const commonStyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    width: "100%",
    height: "100%",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#B9B9BB",
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 16,
    backgroundColor: "#fff"
  },
  textError: {
    fontSize: 14,
    color: color.red
  },

});

export default commonStyles
