import React, {useState} from "react";
import {Image, View, StyleSheet, Text, TextInput, Pressable, AsyncStorage, Alert} from "react-native";
import {commonStyles, ButtonAllGreen} from "../../components";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";

const EditProfile = ({route, navigation}) => {
  const {user} = route.params
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [image, setImage] = useState(user.image)
  const [change, setChange] = useState(false)
  const _chooseImage = async () => {
    await launchImageLibrary({noData: true}, (response) => {
      console.log(response)
      if (response.assets) {
        setImage(response.assets[0]);
        setChange(true);
      }
    })
  }

  const _editProfile = async () => {
    const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    // xử lý lưu ảnh
    const formData = new FormData();
    change ? formData.append('image', {
      name: image.fileName,
      type: image.type,
      uri: image.uri
    }) : formData.append('image', null)
    formData.append('name', name)
    formData.append('address', address)

    try {
      const res = await fetch(BASE_URL + "/user", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data;',
          'Authorization': 'Bearer ' + TOKEN
        },
        body: formData
      });
      const data = await res.json();
      console.log(data)
      if (!data.success) {
        return Alert.alert(
          "Xảy ra lỗi khi thay đổi thông tin",
          "",
          [{text: "Ok"}]
        );
      }
      return navigation.goBack();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={[commonStyles.container, {backgroundColor: "#fff"}]}>
      <View style={styles.imageView}>
        <View style={[styles.avatar, {backgroundColor: "#e5e5e5"}]}>
          {/*<Image source={{uri: image.uri}} style={styles.avatar}/>*/}
          {change ? <Image source={{uri: image.uri}} style={styles.avatar}/> :
            <Image source={{uri: `data:image/;base64,${image}`}} style={styles.avatar}/>}
        </View>
        <Pressable style={styles.iconChoosePhoto} onPress={_chooseImage}>
          <Icon name={"image"} size={25} color={"#fff"}/>
        </Pressable>
      </View>
      <View style={{height: 1, backgroundColor: color.border, marginBottom: 12}} />
      <View style={styles.infoItem}>
        <Text style={{color: color.textBlur, fontSize: 16}}>Tên hiển thị <Icon name={"pen"} size={12}/>
        </Text>
        <TextInput value={name} onChangeText={setName} style={{color: color.text, fontSize: 16, fontWeight: "bold"}} />
      </View>
      <View style={styles.infoItem}>
        <Text style={{color: color.textBlur, fontSize: 16}}>Địa chỉ phòng <Icon name={"pen"} size={12}/></Text>
        <TextInput value={address} onChangeText={setAddress} style={{color: color.text, fontSize: 16, fontWeight: "bold"}} />
      </View>
      <View style={[styles.infoItem, {paddingTop: 12}]}>
        <Text style={{color: color.textBlur, fontSize: 16}}>Số điện thoại:</Text>
        <Text style={{color: color.text, fontSize: 16, fontWeight: "bold"}}>{user.phone_number}</Text>
      </View>
      <View style={{paddingTop: 32}}>
        <ButtonAllGreen title={"Cập nhật"} onPress={_editProfile}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    alignItems: "center",
    paddingBottom: 24,
    marginBottom: 12
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  iconChoosePhoto: {
    position: "absolute",
    bottom: 12,
    right: 110,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color.green,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default EditProfile
