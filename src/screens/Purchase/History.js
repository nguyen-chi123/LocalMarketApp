import React from "react";
import {FlatList, Image, Pressable, Text, View} from "react-native";
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

const ShopProduct = ({shopProductCart, status}) => {
  const _renderProduct = ({item}) => (
    <Product product={item}/>
  );
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

        <View style={{alignItems: "flex-end"}}>
          <Text style={{color: color.green}}>Đã hoàn thành</Text>
          <Text style={{fontSize: 12, paddingTop: 8}}>21/12/2021</Text>
        </View>
      </View>
      <FlatList
        data={shopProductCart.products}
        renderItem={_renderProduct}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />
      <View style={{flexDirection: "row", paddingTop: 12, justifyContent: "center"}}>
        <Text style={styles.totalPrice}>Tổng: </Text>
        <Text style={styles.price}>{shopProductCart.total}</Text>
      </View>
    </View>
  );
}

const History = ({navigation}) => {
  const purchasedOrders = [
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
  const _renderOrders = ({item}) => (
    <View style={{marginTop: 8}}>
      <ShopProduct shopProductCart={item}/>
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList style={{height: "100%", paddingLeft: 8, paddingRight: 8,}}
                data={purchasedOrders}
                renderItem={_renderOrders}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{height: 12}}/>}
      />
    </View>
  )
}

export default History
