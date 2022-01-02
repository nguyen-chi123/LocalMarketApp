import React, {useCallback, useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, FlatList, Pressable, AsyncStorage, Alert} from "react-native";
import color from "../../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";
import ProductItem from "./ProductItem";
import {useFocusEffect} from "@react-navigation/native";

const EditSchedule = ({navigation, route}) => {
  const {schedule} = route.params
  const [scheduleData, setSchedule] = useState(schedule)
  const [status, setStatus] = useState(1)
  const getScheduleById = async () => {
    console.log("SCHEDULE_ID: ", schedule.id)
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/schedule?id=" + schedule.id, {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + TOKEN
        }
      });
      const data = await res.json();
      console.log(data)
      if (!data.success) return;
      setSchedule(data.data);
      setStatus(data['data'].status);
    } catch (e) {
      console.log("getScheduleById:", e)
    }
  }
  useFocusEffect(() => {
    getScheduleById();
  });

  // const _changeStatusSchedule = async () => {
  //   try {
  //     const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
  //     const res = await fetch(BASE_URL + "/schedule", {
  //       method: "POST",
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + TOKEN
  //       },
  //       body: JSON.stringify({
  //         id: schedule.id,
  //         active_from: schedule.active_from,
  //         active_to: schedule.active_to,
  //         delivery_deadline_time: schedule.delivery_deadline_time,
  //         description: schedule.desc
  //       })
  //     });
  //     const data = await res.json();
  //     if (!data.success) return Alert.alert("", `${data.message}`, [{text: "Ok"}]);
  //     setStatus(!status);
  //   } catch (e) {
  //     console.log("_changeStatusSchedule:", e)
  //   }
  // }
  const _renderProduct = ({item}) => (
    <View style={{paddingTop: 6}}><ProductItem product={item} /></View>
  )
  return (
    <View>
      <View style={styles.scheduleHeader}>
        <View style={styles.titleHeader}>
          <Pressable>
            <Text style={{color: (status ? color.green : color.red), fontSize: 16, fontWeight: "bold"}}>{STATUS[schedule.status]}</Text>
          </Pressable>
          <View style={{flexDirection: "row"}}>
            <Pressable style={styles.btnAddProduct} onPress={() => navigation.push("CreateProduct", {id: schedule.id})}>
              <Text style={styles.textAddPro}><Icon name={"plus"} /> Sản phẩm</Text>
            </Pressable>
            <Pressable style={[styles.btnAddProduct,{width: 40, marginLeft: 12}]} onPress={() => navigation.push("")}>
              <Icon name={"pen"} color={"#fff"} size={16}/>
            </Pressable>
          </View>
        </View>
        <View style={{alignItems: "center", paddingTop: 6, flexDirection: "row", justifyContent: "space-between"}}>

         <View style={{alignItems: "flex-end"}}>
           <Text><Text style={{color: color.green}}>start</Text> {schedule.active_from}</Text>
           <Text><Text style={{color: color.red}}>end</Text> {schedule.active_to}</Text>
         </View>
          <Text style={{fontSize: 16, color: color.text}}><Text style={{color: color.green}}>Giao hàng</Text> {schedule.delivery_deadline_time}</Text>
        </View>
      </View>
      <View style={styles.listProduct}>
        <FlatList
          data={schedule.products}
          renderItem={_renderProduct}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 12}}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduleHeader: {
    backgroundColor: color.blur,
    padding: 8
  },
  listProduct: {
    padding: 8,
    paddingTop: 12,
  },
  titleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: color.green,
    borderBottomWidth: 1,
    paddingBottom: 6
  },
  btnAddProduct: {
    height: 35,
    backgroundColor: color.green,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  textAddPro: {
    color: "#fff",
    fontSize: 16
  },
  status: {
    padding: 5,
    borderRadius: 5
  }
})

export default EditSchedule
