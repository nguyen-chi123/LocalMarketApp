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
    height: 120,

  },
  titleProduct: {
    fontSize: 18,
    color: color.text,
    fontWeight: "bold",
    paddingTop: 12,
    paddingBottom: 6
  },
  addToCart: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: color.green,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  // modal add to cart
  modalAddToCart: {
    height: 200,
    backgroundColor: "#fff",
    padding: 12,
    borderTopColor: color.border,
    borderTopWidth: 1
  },
  minusPlus: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: color.border,
    justifyContent: "center",
    alignItems: "center"
  },
  modalAddCart:{
    height: 38,
    width: 50,
    borderRadius: 8,
    backgroundColor: color.green,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 80
  },
  textPrice: {fontSize: 16, color: "#f27b2f", fontWeight: "bold"},
  textNum: {color: color.text, paddingTop: 12, fontSize: 16},
  num: {color: color.textBlur,fontSize: 16, fontWeight: "bold"}
});

export default styles
