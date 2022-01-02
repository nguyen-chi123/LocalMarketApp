import React, {useState} from "react";
import {TextInput, View, Pressable, Text, StyleSheet, AsyncStorage, Alert} from "react-native";
import {commonStyles, ButtonAllGreen} from "../../../components";
import DatePicker from 'react-native-date-picker'
import color from "../../../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";
import moment from "moment";

const CreateSchedule = ({navigation, route}) => {
  const {schedule} = route.params;
  const [activeFrom, setActiveFrom] = useState(new Date());
  const [activeTo, setActiveTo] = useState(new Date());
  const [shipTime, setShipTime] = useState(new Date());
  const [desc, setDesc] = useState("");
  const [openS, setOpenS] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [openG, setOpenG] = useState(false);

  const _postSchedule = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/schedule", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + TOKEN
        },
        body: JSON.stringify({
          active_from: moment(activeFrom).format("YYYY-MM-DD HH:MM"),
          active_to: moment(activeTo).format("YYYY-MM-DD HH:MM"),
          delivery_deadline_time: moment(shipTime).format("HH:MM"),
          description: desc
        })
      });
      const data = await res.json();
      console.log(data)
      if (!data.success) return Alert.alert("Có lỗi xảy ra khi tạo lịch", "", [{text: "Ok"}]);
      return navigation.replace("EditSchedule", {schedule: data.data})
    } catch (e) {
      console.log("_createSchedule:", e)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Chọn thời gian mở lịch bán</Text>
      <View style={styles.itemCreate}>
        <Text style={styles.textItem}>Bắt đầu:</Text>
        <Pressable style={styles.btnChooseDate} onPress={() => {setOpenS(true)}}>
          <Icon name={"calendar"} size={20} color={"#ddd"}/>
          <Text>{moment(activeFrom).format("HH:MM DD/MM/YYYY")}</Text>
        </Pressable>
        <DatePicker
          modal
          open={openS}
          date={activeFrom}
          onConfirm={(date) => {
            setOpenS(false)
            setActiveFrom(date)
          }}
          onCancel={() => {
            setOpenS(false)
          }}
        />
      </View>
      <View style={styles.itemCreate}>
        <Text style={styles.textItem}>Kết thúc:</Text>
        <Pressable style={styles.btnChooseDate} onPress={() => {setOpenE(true)}}>
          <Icon name={"calendar"} size={20} color={"#ddd"}/>
          <Text>{moment(activeTo).format("HH:MM DD/MM/YYYY")}</Text>
        </Pressable>
        <DatePicker
          modal
          open={openE}
          date={activeTo}
          onConfirm={(date) => {
            setOpenE(false)
            setActiveTo(date)
          }}
          onCancel={() => {
            setOpenE(false)
          }}
        />
      </View>
      <View style={styles.itemCreate}>
        <Text style={styles.textItem}>Giao lúc:</Text>
        <Pressable style={styles.btnChooseDate} onPress={() => {setOpenG(true)}}>
          <Icon name={"clock"} size={20} color={"#ddd"}/>
          <Text>{moment(shipTime).format("HH:MM")}</Text>
        </Pressable>
        <DatePicker
          modal
          mode={"time"}
          open={openG}
          date={shipTime}
          onConfirm={(time) => {
            setOpenG(false)
            setShipTime(time)
          }}
          onCancel={() => {
            setOpenG(false)
          }}
          is24hourSource={true}
        />
      </View>

      <View style={{paddingTop: 24}}>
        <Text style={styles.textHeader}>Giới thiệu gian hàng của bạn: </Text>
        <TextInput
          value={desc} onChangeText={setDesc}
          style={styles.inputDesc}
        />
      </View>
      <View style={{paddingTop: 24}}>
        <ButtonAllGreen title={"Lưu"} onPress={_postSchedule}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingLeft: 12, paddingRight: 12,
    backgroundColor: "#fff",
    height: "100%"},
  textHeader: {
    fontSize: 18, color: color.green,
    paddingBottom: 12
  },
  itemCreate: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  textItem: {
    flex: 3,
    fontSize: 16,
    color: color.textBlur
  },
  btnChooseDate: {
    height: 40,
    flex: 7,
    borderWidth: 1,
    borderColor: color.border,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 12,paddingLeft: 12,
    borderRadius: 5,
    flexDirection: "row-reverse"
  },
  inputDesc: {
    borderColor: color.border,
    borderWidth: 1, borderRadius: 5,
    padding: 6
  },
})

export default CreateSchedule;
