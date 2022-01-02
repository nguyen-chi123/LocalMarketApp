import React, {useState} from "react";
import {FlatList, Image, Text, View, Pressable, StyleSheet, Alert} from "react-native";
import styles from "../Cart/Styles";
import color from "../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";

const Product = ({product}) => {
  return (
    <View style={styles.productCart}>
      <View style={{flexDirection: "row", flex: 8}}>
        <Image source={product.image} style={styles.imgProductCart}/>
        <View style={{paddingLeft: 8, justifyContent: "space-between", flex: 6}}>
          <Text style={styles.nameProductCart}>{product.name}</Text>
          <Text style={{fontSize: 16, fontWeight: "bold", color: color.green}}>{product.cost_per_unit*product.quantity}</Text>
        </View>
      </View>
      <View style={{alignItems: "flex-end"}}>
        <Text>Số lượng</Text>
        <Text>{product.quantity}</Text>
      </View>
    </View>
  );
}

const ShopProduct = ({shopProductCart, status, navigation}) => {
  const _renderProduct = ({item}) => (
    <Product product={item}/>
  );
  // const [total, setTotal] = useState(0)
  // for (let p in shopProductCart.products) {
  //   setTotal(total + (p.cost_per_unit)*(p.quantity))
  // }
  return (
    <View style={{borderRadius: 10, backgroundColor: "#fff", padding: 8}}>
      <View style={styles.headerCart}>
        <View>
          <Text style={styles.shopName}>{shopProductCart.shop_name}</Text>
          <View style={{flexDirection: "row", paddingTop: 6}}>
            <Icon name={"phone"} color={color.green} size={12}/>
            <Text style={{color: color.text, fontSize: 12}}> {shopProductCart.phone_number}</Text>
          </View>
        </View>

        <View style={{flexDirection: "row", alignItems: "flex-end"}}>
          <Text style={{color: "#f78b00", paddingRight: 12}}>{status}</Text>
          {status===WAITING ? <Pressable style={styleOrder.cancel} onPress={() => {
            Alert.alert(
              'Bạn có chắc muốn hủy đơn ?',
              "",
              [{text: "Cancel", onPress: () => {

                }},
                {text: "Ok", onPress: () => {

                }}]
            )
          }
          }>
            <Text style={{fontSize: 14, color: "#fff"}}>Hủy</Text>
          </Pressable> : null}
        </View>
      </View>
      <FlatList
        data={shopProductCart.products}
        renderItem={_renderProduct}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />

      <View style={{paddingTop: 8, flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={styles.delivery}>Giao lúc: {shopProductCart.delivery_deadline_time}</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.totalPrice}>Tổng: </Text>
          <Text style={styles.price}>{shopProductCart.total}</Text>
        </View>
      </View>
    </View>
  );
}

const styleOrder = StyleSheet.create({
  cancel: {
    height: 28, width: 40,
    backgroundColor: color.red,
    alignItems: "center", justifyContent: "center",
    borderRadius: 5
  }
})

export default ShopProduct;
