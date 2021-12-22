import React from "react";
import {View, ScrollView} from "react-native";
import NotificationItem from "./NotificationItem";
import styles from "./Styles";

const Notification = () => {
  return(
    <ScrollView style={styles.container}>
      <View style={{paddingTop: 12}}><NotificationItem /></View>
      <View style={{paddingTop: 12}}><NotificationItem /></View>
      <View style={{paddingTop: 12}}><NotificationItem /></View>
      <View style={{paddingTop: 12}}><NotificationItem /></View>
    </ScrollView>
  );
}

export default Notification
