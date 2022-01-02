import React from "react";
import color from "../../assets/color";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderWaiting from "./OrderManage/OrderWaiting";
import OrderDelivery from "./OrderManage/OrderDelivery";
import OrderDone from "./OrderManage/OrderDone";

const Tab = createMaterialTopTabNavigator();

const OrderManagement = () => {
  const _styleTab = () => ({
    tabBarActiveTintColor: color.green,
    tabBarInactiveTintColor: color.textBlur,
    tabBarStyle: {
      height: 50,
    },
    tabBarLabelStyle: {
      fontSize: 14,
    },
    tabBarPressColor: color.blur,
    tabBarIndicatorStyle: {
      backgroundColor: color.green
    }
  })
  return(
    <Tab.Navigator
      screenOptions={_styleTab}
      keyboardDismissMode={'on-drag'}
    >
      <Tab.Screen name={"OrderWaiting"} component={OrderWaiting} options={{title: "Chờ xác nhận"}}/>
      <Tab.Screen name={"OrderDelivery"} component={OrderDelivery} options={{title: "Chờ giao"}}/>
      <Tab.Screen name={"OrderDone"} component={OrderDone} options={{title: "Hoàn Thành"}}/>
    </Tab.Navigator>
  );
}

export default OrderManagement
