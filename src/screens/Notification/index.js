import React from "react";
import {View, ScrollView, FlatList} from "react-native";
import NotificationItem from "./NotificationItem";
import styles from "./Styles";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "Đơn hàng",
      message: "Đơn hàng đặt mua tại Nhà Bí Bo đã được người bán xác nhận"
    },
    {
      id: 2,
      title: "Đơn hàng",
      message: "Đơn hàng đặt mua tại Đặc sản Tây Bắc đã hoàn thành"
    },
    {
      id: 3,
      title: "Đơn hàng",
      message: "Đơn hàng đặt mua tại Đặc sản Tây Bắc đã được người bán xác nhận"
    }

  ]
  const _renderNotification = ({item}) => (
    <View style={{paddingTop: 12}}><NotificationItem notification={item}/></View>
  )
  return(
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={_renderNotification}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />
    </View>
  );
}

export default Notification
