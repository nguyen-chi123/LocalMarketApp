import React from "react";
import {View, Image, StyleSheet, Text, TextPropTypes, FlatList, Pressable} from "react-native";
import color from "../../../assets/color";

const WaitConfirm = () => {
  return (
    <View style={styles.orderBottom}>
      <Pressable style={[{backgroundColor: color.red, width: 50}, styles.action]} >
        <Text style={{color: "#fff", fontSize: 16}}>Hủy</Text>
      </Pressable>
      <Pressable style={[{backgroundColor: color.green, width: 90}, styles.action]} >
        <Text style={{color: "#fff", fontSize: 16}}>Xác nhận</Text>
      </Pressable>
    </View>
  );
}

const ProductInOrder = ({product}) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.product}>
        <View style={styles.imgProduct}>
          <Image source={product.image} style={styles.imgProduct}/>
        </View>
        <View style={styles.infoProduct}>
          <Text style={{fontSize: 18, fontWeight: "bold", color: color.text}}>{product.name}</Text>
          <Text style={{color: color.price, fontWeight: "bold"}}>{product.cost_per_unit}
            <Text style={{color: color.textBlur, fontWeight: "normal", fontSize: 12}}> /{product.unit}</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.quantity}><Text style={{fontWeight: "normal"}}>x</Text>{product.quantity}</Text>
    </View>
  );
}

const UserOrder = ({order, isWaiting}) => {
  const _renderProduct = ({item}) => (
    <ProductInOrder product={item} />
  )
  return (
    <View style={{backgroundColor: "#fff", padding: 6}}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.nameUser}>{order.user_name}</Text>
          <Text>Phòng: <Text style={{color: color.green}}>{order.address}</Text></Text>
          <Text>SĐT: <Text style={{color: color.green}}>{order.phone_number}</Text></Text>
        </View>
        <View style={{alignItems: "flex-end"}}>
          <Text>Tổng thanh toán</Text>
          <Text style={{color: color.price, fontWeight: "bold"}}>210000</Text>
        </View>
      </View>
      <FlatList
        data={order.products}
        renderItem={_renderProduct}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />
      {isWaiting ? <WaitConfirm /> : null }
    </View>
  );
}

const CommonOrder = ({isWaiting}) => {
  const orders = [
    {
      id: 1,
      user_id: 2,
      user_name: "Trịnh Kim",
      phone_number: "012345678",
      address: "1508",
      products: [
        {
          id: 1,
          name: "Sữa chua",
          unit: "hộp",
          cost_per_unit: 10000,
          quantity: 5,
          description: "abc",
          image: require("../../../assets/img/suachua.jpg"),
        },
        {
          id: 2,
          name: "Gà ủ muối",
          unit: "Túi",
          cost_per_unit: 160000,
          quantity: 1,
          description: "abc",
          image: require("../../../assets/img/ga.jpg"),
        }
      ]
    },
  ]
  const _renderOrders = ({item}) => (
    <View style={{paddingTop: 12}}><UserOrder order={item} isWaiting={isWaiting}/></View>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={_renderOrders}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 24}}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingTop: 12, paddingLeft: 8, paddingRight: 8},
  product: {
    flexDirection: "row"
  },
  productItem: {
    backgroundColor: "#fff",
    padding: 8,
    borderBottomColor: color.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imgProduct: {
    height: 60,
    width: 60,
    borderRadius: 8
  },
  infoProduct: {
    paddingLeft: 8,
    justifyContent: "space-between"
  },
  quantity: {
    fontSize: 18,
    color: color.green,
    fontWeight: "bold"
  },
  orderHeader: {
    padding: 8,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: color.green,
    justifyContent: "space-between"
  },
  nameUser: {
    fontSize: 16,
    color: color.text,

  },
  action: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 35
  },
  orderBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    paddingTop: 0
  }

})

export default CommonOrder
