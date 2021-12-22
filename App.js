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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import color from "./src/assets/color";
const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="Purchase" component={Purchase} options={{title: "Đơn mua"}} />
        <Stack.Screen name="History" component={History} options={{title: "Lịch sử mua hàng"}} />
        <Stack.Screen name="Help" component={Help} options={{title: "Trợ giúp"}} />

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
