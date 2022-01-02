import React, {useCallback, useEffect, useState} from "react";
import {View, StyleSheet, Pressable, FlatList, Text, Alert, AsyncStorage} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import {useFocusEffect} from "@react-navigation/native";

const ScheduleItem = ({schedule, navigation}) => {
  const _deleteSchedule = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + `/schedule?id=${schedule.id}`, {
        method: "DELETE",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json()
      console.log(data);
      if (!data.success) Alert.alert("Có lỗi khi xóa lịch", "", [{text: "Ok"}]);
    } catch (e) {
      console.log("getScheduleByUserId:", e)
    }
  }
  return (
    <View style={styles.scheduleItem}>
      <View>
        <Pressable style={styles.scheduleHeader} onPress={() => navigation.navigate("EditSchedule", {schedule: schedule})}>
          <Text style={{color: color.green, fontSize: 16}}>
            Giao hàng <Text style={{color: color.text}}>{schedule.delivery_deadline_time}</Text>
          </Text>
          <Pressable onPress={() => {
            Alert.alert(
              "Bạn có chắc muốn xóa lịch bán này ?",
              "",
              [
                {text: "Cancel"},
                {text: "OK", onPress: _deleteSchedule}
              ]
            )
          }}>
            <Icon name={"trash"} size={20} color={color.red}/>
          </Pressable>
        </Pressable>
        <View style={styles.statusSchedule}>
          {schedule.active ?
            (<Text style={{color: color.green, fontSize: 16}}>Active</Text>) :
            (<Text style={{color: color.red, fontSize: 16}}>Closed</Text>)
          }
          <View style={{alignItems: "flex-end"}}>
            <Text><Text style={{color: color.green}}>start</Text> {schedule.active_from}</Text>
            <Text><Text style={{color: color.red}}>end</Text> {schedule.active_to}</Text>
          </View>
        </View>
      </View>
        <View style={{flexWrap: "wrap", flexDirection: "row"}}>
          {schedule.format_products}
        </View>
    </View>
  )
}

const ScheduleManagement = ({navigation}) => {
  const [schedules, setSchedule] = useState([]);
  const getScheduleManager = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + `/manager/schedule`, {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json()
      console.log(data);
      if (!data.success) return;
      for (const schedule of data.data) {
        let Products = [];
        if (schedule.products) {
          for (const product of schedule.products) {
            Products.push(
              <View style={styles.productItem}>
                <Text style={{color: color.text, fontSize: 16}}>{product.name}
                  <Text style={{fontSize: 12, color: color.green}}> x{product.quantity_in_stock}</Text>
                </Text>
              </View>
            );
          }
        }
        schedule['format_products'] = Products
      }
      setSchedule(data.data)
      console.log(schedules)
    } catch (e) {
      console.log("getScheduleManager:", e)
    }
  }
  useFocusEffect(() => {
    getScheduleManager();
  });

  const _renderSchedule = ({item}) => (
    <View style={{paddingTop: 12}}><ScheduleItem schedule={item} navigation={navigation}/></View>
  )

  return (
    <View style={styles.container}>
      <Pressable style={styles.btnAdd} onPress={() => navigation.navigate("CreateSchedule")}>
        <Icon name={"plus"} color={"#fff"} size={20}/>
      </Pressable>
      <FlatList
        data={schedules}
        renderItem={_renderSchedule}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 24}}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingTop: 12, paddingLeft: 8, paddingRight: 8, height: "100%"},
  btnAdd: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color.green,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    right: 12,
    zIndex: 12
  },
  scheduleItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12
  },
  scheduleHeader: {
    borderBottomWidth: 1, borderBottomColor: color.border,
    paddingBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  statusSchedule: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 6, paddingBottom: 12,
    alignItems: "center"
  },
  productItem: {
    backgroundColor: color.blur,
    borderRadius: 5,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 8,
    marginTop: 8
  }
})

export default ScheduleManagement;
