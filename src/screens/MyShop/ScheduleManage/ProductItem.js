import React from "react";
import {Image, Pressable, Text, View, StyleSheet, Alert, AsyncStorage} from "react-native";
import color from "../../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProductItem = ({product}) => {
  const _deleteProduct = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + `/product?id=${product.id}`, {
        method: "DELETE",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json()
      console.log(data);
      if (!data.success) Alert.alert("Có lỗi khi xóa sản phẩm", "", [{text: "Ok"}]);
    } catch (e) {
      console.log("_deleteProduct: ", e)
    }
  }
  return (
    <View style={styles.productItem}>
      <View style={styles.imgProduct}>
        <Image source={{uri: `data:image/;base64,${product.image}`}} style={styles.imgProduct}/>
      </View>
      <View style={styles.infoProduct}>
        <Text style={{fontSize: 16, fontWeight: "bold", color: color.text}}>{product.name}</Text>
        <Text>SL: {product.quantity_in_stock}</Text>
        <Text style={{color: color.price, paddingTop: 10}}>{product.cost_per_unit}</Text>
      </View>
      <View style={styles.action}>
        <Pressable onPress={() => {
          Alert.alert(
            "Bạn có chắc muốn xóa sản phẩm này?",
            "",
            [
              {text: "Cancel"},
              {text: "Ok", onPress: _deleteProduct}
            ]
          )
        }}>
          <Icon name={"trash"} size={18} color={color.red}/>
        </Pressable>
        <Pressable style={{marginTop: 24}}>
          <Icon name={"pen"} size={18} color={color.green}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row"
  },
  imgProduct: {
    height: 70,
    width: 70,
    borderRadius: 8,
    flex: 2
  },
  infoProduct: {
    paddingLeft: 8,
    flex: 7
  },
  action: {
    flex: 1,
    // justifyContent: "space-between"
  }
})

export default ProductItem;
