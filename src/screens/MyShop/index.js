import React, {useCallback, useEffect, useState} from "react";
import {Alert, AsyncStorage, Image, Pressable, Text, View} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import {ItemProfile} from "../../components";
import {useFocusEffect} from "@react-navigation/native";

const MyShop = ({navigation}) => {
  const [shop, setShop] = useState({});
  const [userId, setUserId] = useState(null);
  const getShop = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/user", {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json();
      if (!data.success) {
        return Alert.alert("Có lỗi xảy ra khi lấy thông tin", "", [{text: "Ok"}])
      }
      const dataShop = data['data'].shop;
      dataShop['image'] = data['data'].image;
      setShop(dataShop);
      setUserId(data['data'].id);
    } catch (e) {
      console.log("getShop:", e)
    }
  }
  useFocusEffect(() => {getShop()});
  return (
    <View>
      <View style={styles.headerShop}>
        <View style={styles.shopAvatar}>
          <View style={styles.avatar}>
            <Image source={{uri: `data:image/;base64,${shop.image}`}} style={styles.avatar}/>
          </View>
          <View style={{paddingLeft: 8}}>
            <Text style={styles.shopName}>{shop.name}</Text>
            <Text style={{fontSize: 14, color: color.textBlur}}>{shop.phone_number}</Text>
          </View>
        </View>
        <Pressable style={styles.editShop} onPress={() => navigation.push("EditShopInfo", {shop})}>
          <Icon name={'pen'} size={15} color={"#fff"}/>
        </Pressable>
      </View>
      <View style={styles.content}>

        <View style={{marginTop: 10}}>
          <ItemProfile icon={"list-alt"} text={"Quản lý đơn hàng"}
            onPress={() => navigation.navigate("OrderManagement")}/>
        </View>
        <View style={{marginTop: 10}}><ItemProfile icon={"calendar-check"} text={"Quản lý lịch bán"}
          onPress={() => navigation.navigate("ScheduleManagement")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"box"} text={"Quản lý sản phẩm"}
          onPress={() => navigation.navigate("ProductManagement")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"chart-line"} text={"Thống kê doanh thu"}
          onPress={() => navigation.navigate("Statistic")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"question"} text={"Bạn cần trợ giúp"}
          onPress={() => navigation.navigate("Help")}
        /></View>

      </View>
    </View>
  );
}

export default MyShop
