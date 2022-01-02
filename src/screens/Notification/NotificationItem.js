import React from "react";
import {View, Pressable, StyleSheet, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";

const NotificationItem = ({notification, navigation}) => {
  return(
      <Pressable style={styles.notificationItem}>
        <Icon name={"bell"} size={20} color={color.green} style={styles.iconN}/>
        <View style={styles.content}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.desc}>{notification.message}</Text>
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  iconN: {
    width: "10%",
    textAlign: "center",
  },
  content: {
    borderLeftColor: "#eee",
    borderLeftWidth: 1,
    padding: 12,
    width: "90%"
  },
  title: {
    fontSize: 18,
    color: color.text
  },
  desc: {
    color: color.textBlur,
    paddingTop: 6,
    textAlign: "justify"
  }
})

export default NotificationItem
