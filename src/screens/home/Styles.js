import React from "react";
import {StyleSheet} from "react-native";
import color from "../../assets/color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#eee",
    flex : 1, flexGrow :1
  },
  // style for header bar
  iconHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  logoImg: {
    height: 35,
    width: 90
  },
  // list category
  scrollHorizontal: {
    horizontal: true,
    backgroundColor: "#fff",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DDD",
    borderBottomWidth: 2
  },
  categoryItem: {
    width: 110,
    height: 70,
    backgroundColor: color.blur,
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textCategory:{
    fontSize: 16,
    fontWeight: "bold",
    color: color.green
  },
  search: {
    width: "75%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default styles
