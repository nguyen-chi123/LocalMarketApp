import React, {useState} from "react";
import {Modal, Pressable, StyleSheet, Text, View, FlatList} from "react-native";
import color from "../assets/color";
import Icon from "react-native-vector-icons/FontAwesome5";




const Select = ({data, playHolder, style, setSelect}) => {
  const [itemSelected, setItemSelected] = useState(null);
  const [showSelect, setShowSelect] = useState(false)
  const ItemSelect = ({selected}) => (
    <Pressable style={styles.itemSelect} onPress={() => {
      setItemSelected(selected)
      setShowSelect(false)
      setSelect(selected)
    }}>
      <Text style={{fontSize: 16, color: color.green}}>{selected.name}</Text>
    </Pressable>
  );
  const _renderItemSelect = ({item}) => (
    <ItemSelect selected={item} />
  );
  return (
    <View style={[styles.viewSelect, style]}>
      <Pressable style={styles.select} onPress={() => setShowSelect(!showSelect)}>
        {itemSelected ?
          <Text style={{fontSize: 16, color: color.text}}>{itemSelected.name}</Text> :
          <Text style={{fontSize: 16}}>{playHolder}</Text>
        }
        <Icon name={"angle-down"}/>
      </Pressable>
      {showSelect ?
        <View style={{height: 70}}>
          <FlatList
            data={data}
            renderItem={_renderItemSelect}
            keyExtractor={item => item.id}
          />
        </View> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  viewSelect: {
    flex: 1,
  },
  select: {
    height: 45,
    flexDirection: "row",
    paddingLeft: 16, paddingRight: 16,
    justifyContent: "space-between", alignItems: "center",
    borderRadius: 8, borderWidth: 1, borderColor: color.border,
    backgroundColor: "#fff"
  },
  itemSelect: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: color.green,
    justifyContent: "center",
    backgroundColor: color.blur,
    paddingLeft: 16
  },
});

export default Select;
