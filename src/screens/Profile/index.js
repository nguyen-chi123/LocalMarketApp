import React from "react";
import {Text, View, Pressable, AsyncStorage, Alert} from "react-native";
import styles from "./Styles";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonAllGreen} from "../../components";

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
  const _userLogout = async () => {
    const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    // console.log(TOKEN)
    try {
      const res = await fetch(BASE_URL + '/logout', {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + TOKEN
        }
      })
      const data = await res.json();
      // console.log(data);
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
          {/*<Image style={styles.imgProfile} source={require('../../assets/img/profile.png')} resizeMode={'contain'}/>*/}
          <View style={styles.imgProfile}><Icon name={"user"} size={40} color={"#fff"}/></View>
          <View style={{marginLeft: 12}}>
            <Text style={styles.name}>Nguyen Chi</Text>
            <View style={styles.edit}>
              <Icon name={"pen"} size={15} color={"#0fa958"}/>
              <Text style={{fontSize: 15, paddingLeft: 6}}>Đổi mật khẩu</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.goShop}
          onPress={() => navigation.push("MyShop")}
        >
          <Text style={styles.textGoShop}>Bán hàng</Text>
          <Icon name={"angle-right"} size={20} color={"#fff"}/>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={{marginTop: 10}}><ItemProfile icon={"address-book"} text={"Thông tin cá nhân"}
          onPress={() => navigation.push("EditProfile")}
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
