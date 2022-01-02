import React from "react";
import {StyleSheet} from "react-native";
import color from "../../assets/color";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    flexDirection: "row"
  },
  searchInput: {
    backgroundColor: "#fff",
    width: "80%",
    height: 40,
    paddingLeft: 12,
    fontSize: 16,
    color: color.text,
    borderRadius: 10
  },
  titleFilter: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.textBlur,
    alignItems: "center"
  },
  // category
  listCategory: {
    height: "15%",
    backgroundColor: "#fff",
    padding: 8,
  },
  // category item
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginLeft: 6
  },
  actionSearch: {
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
    height: "8%",
    backgroundColor: "#fff",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  // lọc theo giá
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMaxMin: {
    flexDirection: "row",
    alignItems: "center"
  },
  // kết quả tìm kiếm
  resSearch: {
    height: "77%",
    paddingLeft: 8,
    paddingRight: 8,
  },
  titleResSearch: {
    fontSize: 18,
    color: color.green,
    textAlign: "center",
    paddingTop: 12
  },
  filter: {
    width: 50,
    height: 30,
    backgroundColor: color.green,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },
  selected: {color: color.green, fontWeight: "bold"},
  notSelect: {color: color.textBlur, fontStyle: "normal"}

})

export default styles
