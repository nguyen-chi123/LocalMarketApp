import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, AsyncStorage, Alert} from "react-native";
import {commonStyles, ButtonAllGreen} from "../../components";
import color from "../../assets/color";

const EditShopInfo = ({route, navigation}) => {
  const {shop} = route.params;
  const [name, setName] = useState(shop.name);
  const [phone, setPhone] = useState(shop.phone_number);
  const [address, setAddress] = useState(shop.address);

  const _updateShop = async () => {
    const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    try {
      const res = await fetch(BASE_URL + "/shop", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
          id: shop.id,
          name: name,
          phone_number: phone,
          address: address
        })
      });
      const data = await res.json();
      if (!data.success) {
        return Alert.alert("Thay đổi thông tin thất bại", "", [{text: "Ok"}])
      }
      console.log(data.data)
      return navigation.goBack()
    } catch (e) {
      console.log("_updateShop:", e)
    }
  }

  return (
    <View style={[commonStyles.container, {backgroundColor: "#fff"}]}>
      <Text style={styles.titlePage}>Shop của bạn</Text>
      <Text style={styles.titleInput}>Tên shop</Text>
      <TextInput style={commonStyles.input} value={name} onChangeText={setName}/>
      <Text style={styles.titleInput}>Số điện thoại</Text>
      <TextInput style={commonStyles.input} value={phone} onChangeText={setPhone}/>
      <Text style={styles.titleInput}>Địa chỉ</Text>
      <TextInput style={commonStyles.input} value={address} onChangeText={setAddress}/>
      <View style={{marginTop: 24}}>
        <ButtonAllGreen title={"Submit"} onPress={_updateShop}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 16,
    color: color.textBlur,
    paddingTop: 12,
    paddingBottom: 6
  },
  titlePage: {
    textAlign: "center",
    fontSize: 16,
    color: color.green,
    textTransform: "uppercase",
    marginBottom: 12
  }
})

export default EditShopInfo
