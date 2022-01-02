import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, Alert, Modal, AsyncStorage} from "react-native";
import {commonStyles, ButtonAllGreen, ModalAlert} from "../../components";
import color from "../../assets/color";

const CreateShop = ({route, navigation}) => {
  const {user} = route.params;
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone_number);
  const [address, setAddress] = useState(user.address);
  const [alert, setAlert] = useState(false);

  const _createShop = async () => {
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
          name: name,
          phone_number: phone,
          address: address
        })
      });
      const data = await res.json()
      console.log(data)
      if (!data.success) {
        return Alert.alert(
          "Không thành công",
          "Tạo shop không thành công",
          [{title: "Cancel"}]
        )
      }

      console.log(data.data);
      setAlert(true)
      setTimeout(() => {
        setAlert(false);
        return navigation.replace("MyShop", {user: user})
      }, 1000);

    } catch (e) {

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
        <ButtonAllGreen title={"Submit"} onPress={_createShop}/>
      </View>

      <Modal
        animationType={"none"}
        transparent={true}
        visible={alert}
        onRequestClose={() => {
          setAlert(!alert)
        }}
      >
        <View style={{flex: 1, padding: 12, paddingTop: 400}}>
          <View style={{height: 150, borderRadius: 10, backgroundColor: color.blur, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: color.green}}>Tạo shop thành công !</Text>
          </View>
        </View>
      </Modal>
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

export default CreateShop
