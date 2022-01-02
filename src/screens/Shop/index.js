import React, {useState} from "react";
import {Pressable, Text, View, Image, ScrollView, FlatList, Modal, Alert} from "react-native";
import styles from "./Styles"
import Icon from "react-native-vector-icons/FontAwesome5";
import color from "../../assets/color";
import { FlatGrid } from 'react-native-super-grid';


const ProductItem = ({navigation, product, onPressAdd}) => {
  return (
    <Pressable style={styles.productItem} onPress={() => navigation.push("ProductInfo", {product: product})}>
      <Image source={{uri: `data:image/;base64,${product.image}`}} style={styles.imgProduct} />
      <Text style={styles.titleProduct}>{product.name}</Text>

      <View style={styles.bottomProduct}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Text style={styles.textPrice}>{product.cost_per_unit}</Text>
          <Text style={{fontSize: 12, color: color.textBlur}}> /{product.unit}</Text>
        </View>
        <Pressable style={styles.addToCart} onPress={onPressAdd}>
          <Icon name={"plus"} size={18} color={"#fff"}/>
        </Pressable>
      </View>
    </Pressable>
  );
}

const Shop = ({route, navigation}) => {
  const {schedule} = route.params
  const [showModal, setShowModal] = useState(false)
  const [productAdd, setProductAdd] = useState(schedule.products[0])
  const [count, setCount] = useState(1)
  const _renderProduct = ({item}) => (
    <View style={{marginTop: 8}}><ProductItem product={item} navigation={navigation} onPressAdd={() => {
      setProductAdd(item)
      setShowModal(!showModal)}
    }/></View>
  )
  const addProductToCart = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.shopHeader}>
        <View style={styles.shopInfo}>
          <Image source={{uri: `data:image/;base64,${schedule.image}`}}  style={styles.shopImg}/>
          <View style={{paddingLeft: 8}}>
            <Text style={{fontSize: 20, color: color.text, fontWeight: "bold"}}>{schedule.name}</Text>
            <View style={{flexDirection: "row", paddingTop: 6, alignItems: "center"}}>
              <Icon name={"clock"} color={color.textBlur} size={14}/>
              <Text style={{fontSize: 14, color: color.textBlur, paddingLeft: 4}}>delivery at: {schedule.delivery_deadline_time}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: "row-reverse", alignItems: "center"}}>
            <Text style={{fontSize: 14, color: color.green,}}> Liên hệ</Text>
            <Icon name={"phone"} size={14} color={color.green}/>
          </View>
          <Text style={{fontSize: 15, color: color.green}}>{schedule.phone_number}</Text>
        </View>
      </View>
      {/*  show product */}
      <View style={styles.listProduct}>
        <FlatGrid
          style={{marginRight: -8, marginLeft: -8}}
          data={schedule.products} renderItem={_renderProduct}
          itemDimension={150}
        />
      </View>
      {/*  Modal add to cart*/}
      <Modal
        animationType={"none"}
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!setShowModal);
          setCount(1)
        }}
      >
        <View style={{flex: 1, justifyContent: "flex-end"}}>
          <View style={styles.modalAddToCart}>
            <Text style={styles.titleProduct}>{productAdd.name}</Text>
            <View style={{flexDirection: "row", marginTop: 7}}>
              <Image source={{uri: `data:image/;base64,${productAdd.image}`}} style={{width: 100, height: 90}}/>
              <View style={{paddingLeft: 24}}>
                <Text style={styles.textPrice}>{productAdd.cost_per_unit}</Text>
                <Text style={styles.textNum}>Số lượng:</Text>
                <View style={{flexDirection: "row", alignItems: "flex-end"}}>
                  <Pressable style={styles.minusPlus} onPress={() => {
                    if (count>1) setCount(count - 1);
                  }}>
                    <Icon name={"minus"} size={12} color={color.textBlur}/>
                  </Pressable>
                  <View style={styles.minusPlus}>
                    <Text style={styles.num}>{count}</Text>
                  </View>
                  <Pressable style={styles.minusPlus} onPress={() => {
                    setCount(count+1)
                  }}>
                    <Icon name={"plus"} size={12} color={color.textBlur}/>
                  </Pressable>
                  <Text style={{color: color.textBlur, paddingLeft: 6, fontSize: 15}}>{productAdd.unit}</Text>
                  <Pressable style={styles.modalAddCart} onPress={() => {
                    setShowModal(false);
                    Alert.alert(
                      `Thành công`,
                      `Bạn đã thêm ${productAdd.name} vào giỏ hàng`,
                      [{text: "Ok"}],
                      {cancelable: true}
                    );

                  }}>
                    <Icon name={"cart-plus"} size={18} color={"#fff"}/>
                  </Pressable>
                </View>

              </View>

            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Shop
