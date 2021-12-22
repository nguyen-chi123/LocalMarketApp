import {Pressable, Text, View} from "react-native";
import styles from "../screens/Profile/Styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";

const ItemProfile = ({icon, text, onPress}) => {
  return (
    <Pressable style={styles.itemProfile}
               onPress={onPress}
    >
      <View style={styles.iconText}>
        <View style={styles.icon}>
          <Icon name={icon} size={23} color={"#0fa958"}/>
        </View>
        <Text style={styles.textItemProfile}>{text}</Text>
      </View>
      <Icon name={"angle-right"} size={20} color={"#999"}/>
    </Pressable>
  );
}

export default ItemProfile
