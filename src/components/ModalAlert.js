import React, {useState} from "react";
import {Modal, Text, View} from "react-native";
import color from "../assets/color";

const ModalAlert = ({showAlert, message}) => {
  const [show, setShow] = useState()
  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShow(!show)
      }}
    >
      <View style={{flex: 1, padding: 12, paddingTop: 400}}>
        <View style={{height: 150, borderRadius: 10, backgroundColor: color.blur, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20, fontWeight: "bold", color: color.green}}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

export default ModalAlert
