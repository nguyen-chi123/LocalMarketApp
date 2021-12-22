import React from "react";
import {StyleSheet} from "react-native";
import color from "../../assets/color";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.blur,
    height: 90,
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  headerProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgProfile: {
    width: 60,
    height: 60,
    // borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 30,
    backgroundColor: color.green,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.green
  },
  edit: {
    flexDirection: "row",
    paddingTop: 5
  },
  goShop:{
    height: 30,
    // width: 80,
    backgroundColor: color.green,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row"
  },
  textGoShop: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    paddingRight: 6
  },
  content: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16
  },
//  item profile
  itemProfile: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  icon: {
    backgroundColor: color.blur,
    width: 33, height: 33,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center"
  },
  textItemProfile: {
    fontSize: 17,
    color: color.textBlur,
    paddingLeft: 10
  },
})

export default styles
