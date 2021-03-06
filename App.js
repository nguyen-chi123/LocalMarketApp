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
        <Stack.Screen name="Login" component={LogIn} options={{title: "????ng nh???p"}}/>
        <Stack.Screen name="SigUp" component={SigUp} options={{title: "????ng k??"}} />
        <Stack.Screen name="SigUpConfirm" component={SigUpConfirm} options={{title: "X??c minh S??? ??i???n tho???i"}} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} options={{title: "????ng nh???p SMS"}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="Notification" component={Notification} options={{title: "Th??ng b??o"}}/>
        <Stack.Screen name="Shop" component={Shop} options={{title: "Gian h??ng"}}/>
        <Stack.Screen name="MyShop" component={MyShop} options={{title: "Shop c???a t??i"}} />
        <Stack.Screen name="EditPass" component={EditPass} options={{title: "?????i m???t kh???u"}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{title: "Th??ng tin c?? nh??n"}} />
        <Stack.Screen name="Purchase" component={Purchase} options={{title: "????n h??ng"}} />
        <Stack.Screen name="History" component={History} options={{title: "L???ch s??? mua h??ng"}} />
        <Stack.Screen name="Help" component={Help} options={{title: "Tr??? gi??p"}} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={{title: "Th??ng tin s???n ph???m"}} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} options={{title: "X??c nh???n th??ng tin"}} />
        <Stack.Screen name="OrderManagement" component={OrderManagement} options={{title: "Qu???n l?? ????n h??ng"}} />
        <Stack.Screen name="ProductManagement" component={ProductManagement} options={{title: "Qu???n l?? s???n ph???m"}} />
        <Stack.Screen name="ScheduleManagement" component={ScheduleManagement} options={{title: "Qu???n l?? l???ch b??n"}} />
        <Stack.Screen name="Statistic" component={Statistic} options={{title: "Th???ng k?? doanh thu"}} />
        <Stack.Screen name="CreateShop" component={CreateShop} options={{title: "B???t ?????u b??n h??ng"}} />
        <Stack.Screen name="EditShopInfo" component={EditShopInfo} options={{title: "S???a th??ng tin shop"}} />
        <Stack.Screen name="CreateSchedule" component={CreateSchedule} options={{title: "T???o l???ch b??n"}} />
        <Stack.Screen name="CreateProduct" component={CreateProduct} options={{title: "Th??m s???n ph???m"}} />
        <Stack.Screen name="EditSchedule" component={EditSchedule} options={{title: "L???ch b??n"}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: "T??i"}} />

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
