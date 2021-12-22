import React from "react";
import {StyleSheet} from "react-native";
import color from "../../assets/color";

const styles = StyleSheet.create({
  headerShop: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 90,
    backgroundColor: color.blur,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  shopAvatar: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    // borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 30,
    backgroundColor: color.green,
    justifyContent: "center",
    alignItems: "center",
  },
  shopName: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.green,
  },
  editShop: {
    backgroundColor: color.green,
    height: 35,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16
  },
  listOrder: {
    height: 70,
    backgroundColor: "#fff",
    paddingLeft: 8,
    paddingRight: 8
  },
  line: {
    height: 1,
    backgroundColor: "#e5e5e5"
  },

});

export default styles
