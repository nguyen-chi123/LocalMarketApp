/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Button,
} from 'react-native';
import {LogIn} from "./src/screens/login/LogIn";
import {SigUp, SigUpConfirm} from "./src/screens/login/SigUp";
import ForgotPass from "./src/screens/login/ForgotPass";
import HomeScreen from "./src/screens/home";
import SearchPage from "./src/screens/SearchPage";
import Notification from "./src/screens/Notification";
import Shop from "./src/screens/Shop";
import MyShop from "./src/screens/MyShop";
import EditPass from "./src/screens/Profile/EditPass";
import EditProfile from "./src/screens/Profile/EditProfile";
import Purchase from "./src/screens/Purchase";
import History from "./src/screens/Purchase/History";
import Help from "./src/screens/Profile/Help";
import ProductInfo from "./src/screens/Product/ProductInfo";
import ConfirmOrder from "./src/screens/Purchase/ConfirmOrder";
import OrderManagement from "./src/screens/MyShop/OrderManagement";
import ProductManagement from "./src/screens/MyShop/ProductManagement";
import ScheduleManagement from "./src/screens/MyShop/ScheduleManagement";
import Statistic from "./src/screens/MyShop/Statistic";
import CreateShop from "./src/screens/MyShop/CreateShop";
import EditShopInfo from "./src/screens/MyShop/EditShopInfo";
import CreateSchedule from "./src/screens/MyShop/ScheduleManage/CreateSchedule";
import CreateProduct from "./src/screens/MyShop/ScheduleManage/CreateProduct";
import EditSchedule from "./src/screens/MyShop/ScheduleManage/EditSchedule";
import Profile from "./src/screens/Profile";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import color from "./src/assets/color";
const Stack = createNativeStackNavigator();
console.reportErrorsAsExceptions = false;

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={styles.headerBar}
      >
        <Stack.Screen name="Login" component={LogIn} options={{title: "Đăng nhập"}}/>
        <Stack.Screen name="SigUp" component={SigUp} options={{title: "Đăng ký"}} />
        <Stack.Screen name="SigUpConfirm" component={SigUpConfirm} options={{title: "Xác minh Số điện thoại"}} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{title: "Đăng nhập SMS"}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="Notification" component={Notification} options={{title: "Thông báo"}}/>
        <Stack.Screen name="Shop" component={Shop} options={{title: "Gian hàng"}}/>
        <Stack.Screen name="MyShop" component={MyShop} options={{title: "Shop của tôi"}} />
        <Stack.Screen name="EditPass" component={EditPass} options={{title: "Đổi mật khẩu"}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{title: "Thông tin cá nhân"}} />
        <Stack.Screen name="Purchase" component={Purchase} options={{title: "Đơn hàng"}} />
        <Stack.Screen name="History" component={History} options={{title: "Lịch sử mua hàng"}} />
        <Stack.Screen name="Help" component={Help} options={{title: "Trợ giúp"}} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={{title: "Thông tin sản phẩm"}} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{title: "Xác nhận thông tin"}} />
        <Stack.Screen name="OrderManagement" component={OrderManagement} options={{title: "Quản lý đơn hàng"}} />
        <Stack.Screen name="ProductManagement" component={ProductManagement} options={{title: "Quản lý sản phẩm"}} />
        <Stack.Screen name="ScheduleManagement" component={ScheduleManagement} options={{title: "Quản lý lịch bán"}} />
        <Stack.Screen name="Statistic" component={Statistic} options={{title: "Thống kê doanh thu"}} />
        <Stack.Screen name="CreateShop" component={CreateShop} options={{title: "Bắt đầu bán hàng"}} />
        <Stack.Screen name="EditShopInfo" component={EditShopInfo} options={{title: "Sửa thông tin shop"}} />
        <Stack.Screen name="CreateSchedule" component={CreateSchedule} options={{title: "Tạo lịch bán"}} />
        <Stack.Screen name="CreateProduct" component={CreateProduct} options={{title: "Thêm sản phẩm"}} />
        <Stack.Screen name="EditSchedule" component={EditSchedule} options={{title: "Lịch bán"}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: "Tôi"}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    headerStyle: {
      backgroundColor: color.green,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    optionHome: {
      title: "LOCAL MARKET",
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      )
    }
  }
});

export default App;
