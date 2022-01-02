import React, {useCallback, useEffect, useState} from "react";
import {Text, View, Pressable, AsyncStorage, Alert, Image} from "react-native";
import styles from "./Styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonAllGreen} from "../../components";
import {useFocusEffect} from "@react-navigation/native";

const ItemProfile = ({icon, text, onPress}) => {
  return (
    <Pressable style={styles.itemProfile}
      onPress={onPress}
    >
      <View style={styles.iconText}>
        <View style={styles.icon}>
          <Icon name={icon} size={23} color={"#0fa958"}/>
        </View>
        <Text style={styles.textItemProfile}>{text}</Text>
      </View>
      <Icon name={"angle-right"} size={20} color={"#999"}/>
    </Pressable>
  );
}

const Profile = ({navigation}) => {
  const [user, setUser] = useState({})
  const getUser = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/user", {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json()
      if (!data.success) {
        return Alert.alert(
          "Có lỗi xảy ra khi lấy thông tin",
          "",
          [{text: "Ok"}]
        )
      }
      setUser(data.data)
    } catch (e) {console.log("getUser", e);}
  }

  useFocusEffect(() => {
    getUser();
  });

  const _userLogout = async () => {
    const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    try {
      const res = await fetch(BASE_URL + '/logout', {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + TOKEN
        }
      })
      const data = await res.json();
      if (!data.success) {
        return Alert.alert(
          "Xảy ra lỗi !",
          "Vui lòng thử lại",
          [{text: "Ok"}]
        )
      }
      await AsyncStorage.removeItem(STORAGE_KEY);
      return navigation.replace("Login")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerProfile}
          onPress={() => navigation.push("EditPass")}
        >
          <View style={styles.imgProfile}>
            <Image source={{uri: `data:image/;base64,${user.image}`}} style={styles.imgProfile}/>
          </View>
          <View style={{marginLeft: 12}}>
            <Text style={styles.name}>{user.name}</Text>
            <View style={styles.edit}>
              <Icon name={"pen"} size={15} color={"#0fa958"}/>
              <Text style={{fontSize: 15, paddingLeft: 6}}>Đổi mật khẩu</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.goShop}
          onPress={() => {
            if (!user.shop) return navigation.push("CreateShop", {user})
            return navigation.push("MyShop")
          }}
        >
          <Text style={styles.textGoShop}>Bán hàng</Text>
          <Icon name={"angle-right"} size={20} color={"#fff"}/>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={{marginTop: 10}}><ItemProfile icon={"address-book"} text={"Thông tin cá nhân"}
          onPress={() => navigation.push("EditProfile", {user: user})}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"bell"} text={"Thông báo"}
          onPress={() => navigation.push("Notification")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"list-alt"} text={"Đơn mua"}
          onPress={() => navigation.push("Purchase")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"clock"} text={"Lịch sử mua hàng"}
          onPress={() => navigation.push("History")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"question"} text={"Liên hệ trợ giúp"}
          onPress={() => navigation.push("Help")}
        /></View>
        <View style={{marginTop: 34}}>
          <ButtonAllGreen title={"Đăng xuất"} onPress={_userLogout}/>
        </View>
      </View>
    </View>
  );
}

export default Profile
