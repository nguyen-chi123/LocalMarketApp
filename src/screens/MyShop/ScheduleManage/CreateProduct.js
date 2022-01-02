import React, {useEffect, useState} from "react";
import {Image, View, StyleSheet, Pressable,ScrollView, TextInput, AsyncStorage, Alert, Text} from "react-native";
import color from "../../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";
import {commonStyles, ButtonAllGreen, Select} from "../../../components";
import { launchImageLibrary } from 'react-native-image-picker';

const CreateProduct = ({navigation, route}) => {
  const {id} = route.params

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [unit, setUnit] = useState({});
  const [category, setCategory] = useState({});
  const [cost, setCost] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [desc, setDesc] = useState(null);
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const getCategoryUnit = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const resCategory = await fetch(BASE_URL + "/category", {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN}
      });
      const resUnit = await fetch(BASE_URL + "/unit", {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN}
      });
      const dataCategory = await resCategory.json();
      const dataUnit = await resUnit.json();
      console.log(dataCategory)
      console.log(dataUnit)
      if (dataCategory.success) setCategories(dataCategory.data);
      if (dataUnit.success) setUnits(dataUnit.data);
    } catch (e) {
      console.log("getCategoryUnit:", e)
    }
  }
  useEffect(() => {
    getCategoryUnit();
  }, []);

  const formData = new FormData();
  formData.append("schedule_id", id)
  formData.append('name', name)
  formData.append('unit_id', unit.id)
  formData.append('category_id', category.id)
  formData.append('cost_per_unit', cost)
  formData.append('quantity', quantity)
  image ? formData.append('image', {
    name: image.fileName,
    type: image.type,
    uri: image.uri
  }) : formData.append('image', null)

  const _chooseImage = async () => {
    await launchImageLibrary({noData: true}, (response) => {
      if (response["assets"]) {
        console.log(response["assets"][0])
        setImage(response["assets"][0]);
      }
    })
  }

  const _createProduct = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/product", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + TOKEN
        },
        body: formData
      });
      const data = await res.json();
      console.log(data)
      if (!data.success) return Alert.alert("", "Xảy ra lỗi khi tạo sản phẩm", [{text: "Ok"}]);
      return navigation.goBack();
    } catch (e) {
      console.log("_createProduct:", e)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: "center"}}>
        <View style={styles.imageProduct}>
          <Image source={image} style={styles.imageProduct}/>
          <Pressable style={styles.btnTakePhoto} onPress={_chooseImage}>
            <Icon name={"image"} color={"#fff"} size={24}/>
          </Pressable>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput style={commonStyles.input} placeholder={"Tên sản phẩm"}
                   value={name} onChangeText={setName}/>
        <View style={{flexDirection: "row", paddingTop: 12}}>
          <TextInput style={[commonStyles.input, {flex: 1}]} placeholder={"Giá"}
                     value={cost} onChangeText={setCost}/>
          <TextInput style={[commonStyles.input, {flex: 1, marginLeft: 12}]} placeholder={"Số lượng"}
                     value={quantity} onChangeText={setQuantity}/>
        </View>
        <View style={{flexDirection: "row", paddingTop: 12}}>
          <Select data={units} playHolder={"Đơn vị"} style={{marginRight: 16}} setSelect={setUnit}/>
          <Select data={categories} playHolder={"Thể loại"} setSelect={setCategory}/>
        </View>
        <TextInput style={[commonStyles.input, {marginTop: 12}]} numberOfLines={3} multiline={true} placeholder={"Mô tả sản phẩm ..."}
          value={desc} onChangeText={setDesc}
        />
      </View>
      <View style={{paddingTop: 24}}>
        <ButtonAllGreen title={"Lưu lại"} onPress={_createProduct}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 12
  },
  imageProduct: {
    height: 200,
    width: 250,
    backgroundColor: color.border,
  },
  btnTakePhoto: {
    height: 50,
    width: 50,
    position: "absolute",
    backgroundColor: color.green,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    bottom: 16, right: 16
  },
  content: {
    marginTop: 24
  },
  choose: {
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.border,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: "center"

  },
  viewSelect: {
    backgroundColor: "#fff"
  }

})

export default CreateProduct;
