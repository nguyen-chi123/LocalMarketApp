import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from "./Home"
import Purchase from "../Purchase";
import Cart from "../Cart";
import Profile from "../Profile";
import color from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  const _changeTab = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName
      if (route.name === 'Trang chủ') iconName = "home";
      else if (route.name === 'Đơn hàng') iconName = "list-alt";
      else if (route.name === 'Giỏ hàng') iconName = "shopping-cart"
      else iconName = "user"
      return <Icon name={iconName} size={size} color={color} />;
    },
    headerStyle: {
      backgroundColor: color.green,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarActiveTintColor: color.green,
    tabBarInactiveTintColor: color.textBlur,
    // tabBarActiveBackgroundColor: color.green,
    tabBarStyle: {
      height: 55
    },
    tabBarLabelStyle: {
      fontSize: 12,
      paddingBottom:4,
    },

  })
  return(
    <Tab.Navigator
      screenOptions={_changeTab}
    >
      <Tab.Screen name={"Trang chủ"} component={Home} />
      <Tab.Screen name={"Đơn hàng"} component={Purchase} />
      <Tab.Screen name={"Giỏ hàng"} component={Cart} />
      <Tab.Screen name={"Tôi"} component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeScreen
