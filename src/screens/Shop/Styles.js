import React from "react";
import {StyleSheet} from "react-native";
import color from "../../assets/color";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  shopHeader: {
    height: 70,
    backgroundColor: color.blur,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 12
  },
  shopInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  shopImg: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  listProduct: {
    padding: 12,

  },
  // product item
  productItem: {
    padding: 8,
    borderRadius: 8,
    borderColor: color.border,
    borderWidth: 1,
    // width: "50%",
    // height: 150
  },
  imgProduct: {
    width: "100%",
    height: 100,

  },
  titleProduct: {

  },
  descProduct: {

  }


});

export default styles
