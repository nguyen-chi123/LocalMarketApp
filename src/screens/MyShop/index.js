import React from "react";
import {Pressable, Text, View} from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import {ButtonAllGreen, ItemProfile} from "../../components";

const MyShop = ({navigation}) => {
  return (
    <View>
      <View style={styles.headerShop}>
        <View style={styles.shopAvatar}>
          <View style={styles.avatar}><Icon name={"user"} size={30} color={"#fff"}/></View>
          <View style={{paddingLeft: 8}}>
            <Text style={styles.shopName}>shop name</Text>
            <Text style={{fontSize: 14, color: color.textBlur}}>username</Text>
          </View>
        </View>
        <Pressable style={styles.editShop}>
          <Icon name={'pen'} size={15} color={"#fff"}/>
        </Pressable>
      </View>
      <View style={styles.content}>

        <View style={{marginTop: 10}}>
          <ItemProfile icon={"list-alt"} text={"Quản lý đơn hàng"}
            onPress={() => navigation.push("EditProfile")}/>
          <View style={styles.listOrder}>
            <View style={styles.line}/>
          </View>
        </View>
        <View style={{marginTop: 10}}><ItemProfile icon={"calendar-check"} text={"Quản lý lịch bán"}
          onPress={() => navigation.push("Notification")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"box"} text={"Quản lý sản phẩm"}
          onPress={() => navigation.push("Purchase")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"chart-line"} text={"Thống kê doanh thu"}
          onPress={() => navigation.push("History")}
        /></View>
        <View style={{marginTop: 10}}><ItemProfile icon={"question"} text={"Bạn cần trợ giúp"}
          onPress={() => navigation.push("History")}
        /></View>

      </View>
    </View>
  );
}

export default MyShop
