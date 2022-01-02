import React from "react";
import {FlatList, Text, View} from "react-native";
import styles from "../Cart/Styles";

import ShopProduct from "./CommonOrder"

const WaitConfirm = ({navigation}) => {
  const ordersWait = [
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
      <ShopProduct shopProductCart={item} status={WAITING} navigation={navigation}/>
    </View>
  )
  return(
    <View style={styles.container}>
      <FlatList style={{height: "100%", paddingLeft: 8, paddingRight: 8,}}
                data={ordersWait}
                renderItem={_renderOrders}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{height: 12}}/>}
      />
    </View>
  );
}

export default WaitConfirm;
