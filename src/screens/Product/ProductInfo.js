import React, {useState} from "react";
import {Image, Text, View, StyleSheet, Pressable, Alert} from "react-native";
import {commonStyles} from "../../components";
import color from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProductInfo = ({ route, navigation }) => {
  const {product} = route.params;
  const [count, setCount] = useState(1)
  return (
    <View style={[commonStyles.container, {backgroundColor: "#fff"}]}>
      <Image source={product.image} style={styles.imgProduct}/>
      <Text style={styles.titleProduct}>{product.name}</Text>
      <Text style={{marginTop: 6}}>Còn:
        <Text style={{color: color.green, fontWeight: "bold"}}> {product.quantity_in_stock} </Text>
        {product.unit}</Text>
      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 12}}>
        <Text style={styles.costProduct}>{product.cost_per_unit} <Text style={{fontSize: 12, fontWeight: "normal", color: color.green}}>VND</Text></Text>
        <View style={{flexDirection: "row", alignItems: "flex-end"}}>
          <Pressable style={styles.minusPlus} >
            <Icon name={"minus"} size={14} color={color.textBlur} onPress={() => {
              if (count > 1) setCount(count-1);
            }}/>
          </Pressable>
          <View style={styles.minusPlus}>
            <Text style={{fontSize: 16, fontWeight: "bold", color: color.textBlur}}>{count}</Text>
          </View>
          <Pressable style={styles.minusPlus} onPress={() => {
            if (count < product.quantity_in_stock) setCount(count + 1);
            else {
              Alert.alert("",
                "Vượt quá số lượng",
                [{text: "Ok"}],
                {cancelable: true}
              )
            }
          }}>
            <Icon name={"plus"} size={14} color={color.textBlur}/>
          </Pressable>
        </View>
      </View>
      <Text style={styles.descProduct}>{product.description}</Text>
      <Pressable style={styles.btnAddCart} onPress={() => {
        Alert.alert(
          "",
          "Bạn đã thêm thành công vào giỏ hàng",
          [{text: "Ok"}]
        )
      }}>
        <Icon name={"cart-plus"} size={20} color={"#fff"}/>
        <Text style={{fontSize: 16, color: "#fff", paddingLeft: 6}}>Thêm vào giỏ</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imgProduct: {
    width: "100%",
    height: 200,
  },
  titleProduct: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.text,
    marginTop: 16
  },
  costProduct: {
    fontSize: 20,
    color: color.price,
    fontWeight: "bold",
    marginTop: 12
  },
  minusPlus: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: color.border,
    justifyContent: "center",
    alignItems: "center"
  },
  descProduct: {
    fontSize: 16,
    color: color.text,
    marginTop: 24,
    textAlign: "justify"
  },
  btnAddCart: {
    flexDirection: "row",
    backgroundColor: color.green,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24
  }

})

export default ProductInfo
