import React from "react";
import {Pressable, Text, View, Image, ScrollView, FlatList} from "react-native";
import styles from "./Styles"
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import { FlatGrid } from 'react-native-super-grid';


const ProductItem = ({navigation, product}) => {
  return (
    <View style={styles.productItem}>
      <Image source={require('../../assets/img/shop.png')} style={styles.imgProduct} />
      <Text style={styles.titleProduct}>{product.name}</Text>
      <Text style={styles.descProduct}>{product.description}</Text>
    </View>
  );
}

const Shop = () => {
  const schedule = {
    id: 1,
    name: "Bán thứ 2",
    shop_name: "Pet Shop",
    image: require("../../assets/img/shop.png"),
    delivery_deadline_time: "19h30",
    phone_number: "0373607630",
    products: [
      {
        id: 1,
        name: "Sữa chua",
        category: "Thực phẩm",
        unit: "hộp",
        cost_per_unit: 10000,
        description: "Sinh nhật năm nay, em đã nhận được một món quà rất đặc biệt từ bố mẹ. Đó là một chú chó vô cùng đáng yêu.",
        image: require("../../assets/img/shop.png")
      },
      {
        id: 2,
        name: "Trứng gà",
        category: "Thực phẩm",
        unit: "chục",
        const_per_unit: 40000,
        description: "Trứng quê, bao sạch, bao ngon, bao bổ, mại dô",
        image: require("../../assets/img/shop.png")
      },
      {
        id: 3,
        name: "Thịt gà",
        category: "Thực phẩm",
        unit: "kg",
        const_per_unit: 180000,
        description: "Gà ta dai ngon nhức lách, tặng kèm muối chanh",
        image: require("../../assets/img/shop.png")
      },
      {
        id: 4,
        name: "Thịt gà",
        category: "Thực phẩm",
        unit: "kg",
        const_per_unit: 180000,
        description: "Gà ta dai ngon nhức lách, tặng kèm muối chanh",
        image: require("../../assets/img/shop.png")
      },
    ]
  }
  const _renderProduct = ({item}) => (
    <View style={{marginTop: 8}}><ProductItem product={item}/></View>
  )
  return (
    <ScrollView style={styles.container}>
      <View style={styles.shopHeader}>
        <View style={styles.shopInfo}>
          <Image source={require("../../assets/img/shop.png")}  style={styles.shopImg}/>
          <View style={{paddingLeft: 8}}>
            <Text style={{fontSize: 20, color: color.text, fontWeight: "bold"}}>Tên shop</Text>
            <View style={{flexDirection: "row", paddingTop: 6, alignItems: "center"}}>
              <Icon name={"clock"} color={color.textBlur} size={14}/>
              <Text style={{fontSize: 14, color: color.textBlur, paddingLeft: 4}}>delivery at: 19h30</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: "row-reverse", alignItems: "center"}}>
            <Text style={{fontSize: 14, color: color.green,}}> Liên hệ</Text>
            <Icon name={"phone"} size={14} color={color.green}/>
          </View>
          <Text style={{fontSize: 15, color: color.textBlur}}>0373607630</Text>
        </View>
      </View>
      {/*  show product */}
      <View style={styles.listProduct}>
        {/*<FlatList*/}
        {/*  data={schedule.products} renderItem={_renderProduct}*/}
        {/*  keyExtractor={item => item.id}*/}
        {/*  showsVerticalScrollIndicator={false}*/}
        {/*  ListFooterComponent={<View style={{height: 12}}/>}*/}
        {/*/>*/}
        <FlatGrid style={{
          // paddingLeft: 12,
          paddingRight: 12
        }}
          // itemDimension={"200"}
          data={schedule.products} renderItem={_renderProduct}
        />
      </View>
    </ScrollView>
  );
}

export default Shop
