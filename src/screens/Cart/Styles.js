import React from "react";
import {StyleSheet} from "react-native";
import color from "../../assets/color";

const styles = StyleSheet.create({
  container: {

    paddingTop: 12
  },
  headerCart: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: color.green,
    borderBottomWidth: 1
  },
  shopName: {
    fontSize: 18,
    color: color.text,
    fontWeight: "bold"
  },
  delivery: {
    fontSize: 14,
    color: color.green,
  },
  productCart: {
    backgroundColor: "white",
    // height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
    width: "100%"
  },
  imgProductCart: {
    height: 80,
    borderRadius: 8,
    flex: 3
  },
  nameProductCart: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.text,
    maxWidth: "100%"
  },
  minusPlus: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center"
  },
  //
  payment: {
    height: "12%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 12,
    paddingTop: 0
  },
  btnBuy: {
    backgroundColor: color.green,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 8,
  },
  price: {fontSize: 16, color: color.price, fontWeight: "bold"},
  totalPrice: {color: color.text, fontSize: 16, paddingBottom: 4}
})

export default styles
