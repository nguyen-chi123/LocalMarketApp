import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WaitConfirm from "./WaitConfirm";
import Order from "./Order";
import History from "./History";
import color from "../../assets/color";

const Tab = createMaterialTopTabNavigator();

const Purchase = () => {
  const _changeTab = () => ({
    tabBarActiveTintColor: color.green,
    tabBarInactiveTintColor: color.textBlur,
    tabBarStyle: {
      height: 50,
    },
    tabBarLabelStyle: {
      fontSize: 14,
      // fontWeight: "bold"
    },
  })
  return(
    <Tab.Navigator
      screenOptions={_changeTab}
      keyboardDismissMode={'on-drag'}
      tabBarOptions={({
        pressColor: color.blur,
        indicatorStyle: {
          backgroundColor: color.green
        }
      })}
    >
      <Tab.Screen name={"WaitConfirm"} component={WaitConfirm} options={{title: "Chờ xác nhận"}}/>
      <Tab.Screen name={"Order"} component={Order} options={{title: "Chờ giao"}}/>
      <Tab.Screen name={"History"} component={History} options={{title: "Lịch sử"}}/>
    </Tab.Navigator>
  );
}

export default Purchase;
