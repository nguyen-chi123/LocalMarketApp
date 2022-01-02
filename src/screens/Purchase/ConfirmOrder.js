import React, {useState} from "react";
import {TextInput, View, Pressable, Text, StyleSheet, Alert, Modal} from "react-native";
import {commonStyles, ButtonAllGreen} from "../../components";
import color from "../../assets/color";

const ConfirmOrder = ({navigation}) => {
  const [phone, setPhone] = useState("0373607639")
  const [room, setRoom] = useState("1508")
  const [show, setShow] = useState(false)
  return(
    <View style={[commonStyles.container, {backgroundColor: "#fff"}]}>
      <View style={{alignItems: "center"}}>
        <Text style={styles.title}>Đơn hàng sẽ được giao tới địa chỉ</Text>
      </View>
      <View style={{flexDirection: "row", alignItems: "center", marginTop: 12}}>
        <Text style={{fontSize: 16, color: color.textBlur, flex: 1}}>Số điện thoại</Text>
        <TextInput value={phone} onChangeText={setPhone} style={[commonStyles.input, {flex: 2, color: color.textBlur}]}/>
      </View>
      <View style={{flexDirection: "row", alignItems: "center", marginTop: 12}}>
        <Text style={{fontSize: 16, color: color.textBlur, flex: 1, }}>Địa chỉ phòng</Text>
        <TextInput value={room} onChangeText={setRoom} style={[commonStyles.input, {flex: 2, color: color.textBlur}]}/>
      </View>
      <View style={{marginTop: 24}}>
        <ButtonAllGreen title={"Xác nhận"} onPress={() => {
          // hàm post dữ liệu
          setShow(true);
          setTimeout(() => {
            setShow(!show)
            return navigation.replace("Purchase")
          }, 1500);

        }}/>
      </View>
      <Modal
        animationType={"none"}
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show)
        }}
      >
        <View style={{flex: 1, padding: 12, paddingTop: 400}}>
          <View style={{height: 150, borderRadius: 10, backgroundColor: color.blur, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: color.green}}>Đặt hàng thành công !</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: color.green,
    alignItems: "center",
    marginBottom: 12
  }
})

export default ConfirmOrder
