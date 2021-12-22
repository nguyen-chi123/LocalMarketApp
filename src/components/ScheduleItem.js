import React from "react";
import {View, StyleSheet, Text, Image, Pressable} from "react-native";
import FbImages from "./FbImages";
import color from "../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";

const ScheduleItem = ({navigation, schedule}) => {
  const products = [];
  const imgProducts = [];
  for (const product of schedule.products) {
    products.push(<Text style={styles.product}>{product.name}</Text>)
    imgProducts.push(product.image)
  }
  return (
    <View style={styles.scheduleItem}>
      <View style={styles.contentText}>
        <Pressable style={styles.headerSchedule} onPress={() => navigation.push("Shop")}>
          <View style={styles.shopInfo}>
            <Image
              source={schedule.image}
              style={styles.shopImg}
            />
            <View style={styles.shopTitle}>
              <Text style={styles.title}>{schedule.name}</Text>
              <Text style={{fontSize: 13, color: color.textBlur}}>delivery at: {schedule.delivery_deadline_time}</Text>
            </View>
          </View>
          <View>
            <Icon name={"arrow-right"} size={20} color={color.green}/>
          </View>
        </Pressable>
        <Text style={styles.desc}>{schedule.description}</Text>
        <View style={styles.listProduct}>
          {products}
        </View>
      </View>
      <View style={styles.contentImg}>
        <FbImages images={imgProducts}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleItem: {
    borderRadius: 10,
    borderColor: color.border,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  contentText: {margin: 16, marginBottom: 8},
  headerSchedule:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  toText: {
    color: color.green,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 30
  },
  contentImg:{margin: 8},
  shopInfo: {flexDirection: "row"},
  shopImg:{
    height: 40,
    width: 40,
    borderRadius: 20
  },
  shopTitle: {paddingLeft: 10},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222"
  },
  category: {color: "#888", fontSize: 16},
  desc: {
    marginTop: 12,
    color: color.text,
    fontSize: 16,
    textAlign: "justify"
  },
  listProduct: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  },
  product: {
    backgroundColor: "#e4f3ea",
    color: color.text,
    borderRadius: 5,
    fontSize: 16,
    padding: 4,
    paddingLeft: 8,
    marginRight: 5,
    textAlign: "center"
  }
});

export default ScheduleItem
