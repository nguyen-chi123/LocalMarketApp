import React, {useCallback, useEffect, useState} from "react";
import {AsyncStorage, FlatList, View} from "react-native";
import ProductItem from "./ScheduleManage/ProductItem";
import {useFocusEffect} from "@react-navigation/native";

const ProductManagement = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const _getProductManagement = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/manager/product", {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json()
      console.log(data);
      if (!data.success) return;
      setProducts(data.data)
    } catch (e) {
      console.log("_getProductManagement:", e)
    }
  }
  useFocusEffect(() => {
    _getProductManagement();
  });

  const _renderProduct = ({item}) => (
    <View style={{paddingTop: 8}}>
      <ProductItem product={item}/>
    </View>
  );
  return (
    <View style={{paddingTop: 12}}>
      <FlatList
        data={products}
        renderItem={_renderProduct}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />
    </View>
  )
}

export default ProductManagement
