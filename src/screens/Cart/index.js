import React, {useState} from "react";
import {Alert, Button, FlatList, Image, Modal, Pressable, Text, View} from "react-native";
import styles from "./Styles"
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import {ButtonAllGreen} from "../../components";

const ProductCart = ({product, navigation}) => {
  const [count, setCount] = useState(1)
  return (
    <Pressable style={styles.productCart} onPress={() => navigation.push("ProductInfo", {product})}>
      <View style={{flexDirection: "row", flex: 8}}>
        <Image source={product.image} style={styles.imgProductCart}/>
        <View style={{paddingLeft: 8, justifyContent: "space-between", flex: 6}}>
          <Text style={styles.nameProductCart}>{product.name}</Text>

          <Text style={{fontSize: 16, fontWeight: "bold", color: color.green}}>{product.cost_per_unit*count}
            <Text style={{fontSize: 12, color: color.textBlur}}> /{product.unit}</Text>
          </Text>

        </View>
      </View>
      <View style={{alignItems: "space-between", flex: 2}}>
        <Pressable style={{paddingBottom: 28}}>
          <Icon name={"trash"} size={15} color={color.red}/>
        </Pressable>
        <View style={{flexDirection: "row"}}>
          <Pressable style={styles.minusPlus} onPress={() => {
            if (count>1) setCount(count-1)
          }}>
            <Icon name={"minus"} size={12} color={color.textBlur}/>
          </Pressable>
          <View style={styles.minusPlus}>
            <Text style={styles.num}>{count}</Text>
          </View>
          <Pressable style={styles.minusPlus} onPress={() => setCount(count+1)}>
            <Icon name={"plus"} size={12} color={color.textBlur}/>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const ShopProductCart = ({shopProductCart, navigation}) => {
  const _renderProduct = ({item}) => (
    <ProductCart product={item} navigation={navigation}/>
  );
  return (
    <View style={{borderRadius: 10, backgroundColor: "#fff", padding: 8}}>
      <View style={styles.headerCart}>
        <Text style={styles.shopName}>{shopProductCart.shop_name}</Text>
        <View style={{alignItems: "flex-end"}}>
          <Text style={styles.delivery}>Delivery at</Text>
          <Text style={styles.delivery}>{shopProductCart.delivery_deadline_time}</Text>
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
        <Text style={styles.totalPrice}>Tổng</Text>
        <Text style={styles.price}>{shopProductCart.total}</Text>
      </View>
    </View>
  );
}

const Cart = ({navigation}) => {
  const productInCart = [
    {
      id: 1,
      shop_name: "Nhà Bí Bo",
      delivery_deadline_time: "19h30",
      phone_number: "012345678",
      total: 40000,
      products: [
        {
          id: 1,
          name: "Sữa chua",
          unit: "hộp",
          cost_per_unit: 10000,
          quantity: 1,
          quantity_in_stock: 20,
          description: "abc",
          image: require("../../assets/img/suachua.jpg"),
        },
        {
          id: 2,
          name: "Trứng gà",
          unit: "chục",
          cost_per_unit: 30000,
          quantity: 1,
          quantity_in_stock: 10,
          description: "abc",
          image: require("../../assets/img/trung.jpg")
        },
      ]
    },
    {
      id: 2,
      shop_name: "Đặc sản Tây Bắc",
      delivery_deadline_time: "19h30",
      phone_number: "0373607630",
      total: 350000,
      products: [
        {
          id: 3,
          name: "Thịt trâu gác bếp",
          unit: "kg",
          cost_per_unit: 350000,
          quantity: 1,
          quantity_in_stock: 19,
          description: "abc",
          image: require("../../assets/img/thit.jpg"),
        }
      ]
    },
  ];
  const _renderProductInCart = ({item}) => (
    <View style={{marginTop: 8}}>
      <ShopProductCart shopProductCart={item} navigation={navigation}/>
    </View>
  )
  return(
    <View style={styles.container}>
      <FlatList style={{height: "88%", paddingLeft: 8, paddingRight: 8,}}
        data={productInCart}
        renderItem={_renderProductInCart}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />
      <View style={styles.payment}>
        <View>
          <Text style={styles.totalPrice}>Tổng Thanh toán</Text>
          <Text style={[styles.price, {color: color.red}]}>390000</Text>
        </View>
        <Pressable style={styles.btnBuy} onPress={() => {
          return navigation.push("ConfirmOrder")
        }}>
          <Text style={{color: "#fff", fontSize: 16, fontWeight: "bold"}}>Mua hàng</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Cart
