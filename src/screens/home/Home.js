import React from "react";
import {Text, View, ScrollView, FlatList, Image, Pressable, AsyncStorage, SafeAreaView} from "react-native";
import styles from "./Styles"
import ScheduleItem from "../../components/ScheduleItem";
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from "../../assets/color";

const CategoryItem = ({title, icon}) => (
  <Pressable style={styles.categoryItem}>
    <Icon name={icon} size={30} color={color.green} style={{textAlign: "center"}}/>
    <Text style={styles.textCategory}>{title}</Text>
  </Pressable>
);

const ListCategory = () => {
  const categories = [
      {
        id: 1,
        icon: "carrot",
        title: "Thực phẩm"
      },
      {
        id: 2,
        icon: "bread-slice",
        title: "Thời trang"
      },
      {
        id: 3,
        icon: "book",
        title: "Sách"
      },
      {
        id: 4,
        icon: "charging-station",
        title: "Điện tử"
      },
      {
        id: 5,
        icon: "hand-holding-medical",
        title: "Đồ cũ"
      },
      {
        id: 6,
        icon: "house-user",
        title: "Nhà làm"
      }
    ];
  const renderCategoryItem = ({ item }) => (
    <CategoryItem title={item.title} icon={item.icon}/>
  );

  return (
    <View style={styles.scrollHorizontal}>
      <FlatList
        horizontal={true}
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const Home = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Image source={require("../../assets/img/logoLM.png")} style={styles.logoImg} />
        </View>
      ),
      headerRight: () => (
        <View style={styles.iconHeader}>
          <Pressable onPress={() => navigation.push("SearchPage")} style={styles.search}>
            <Text style={{color: "#ccc", marginLeft: 10}}>Tìm kiếm ...</Text>
            <Icon name={"search"} color={"#ccc"} size={20} style={{marginRight: 10}}/>

          </Pressable>
          <Pressable onPress={() => navigation.push("Notification")} style={{paddingRight: 16, marginLeft: 16}}>
            <Icon name={"bell"} color={"#fff"} size={23} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);
  const schedules = [
    {
      id: 1,
      name: "Bán thứ 2",
      shop_name: "Pet Shop",
      image: require("../../assets/img/shop.png"),
      description: "Chào cả nhà, hôm nay mình lại mở gian hàng quê nhỏ, mong mọi người ủng hộ ",
      delivery_deadline_time: "19h30",
      phone_number: "0373607630",
      products: [
        {
          id: 1,
          name: "Sữa chua",
          category: "Thực phẩm",
          unit: "hộp",
          cost_per_unit: 10000,
          description: "Sinh nhật năm nay, em đã nhận được một món quà rất đặc biệt từ bố mẹ. Đó là một chú chó vô cùng đáng yêu.",
          image:require("../../assets/img/shop.png")
        },
        {
          id: 2,
          name: "Trứng gà",
          category: "Thực phẩm",
          unit: "chục",
          const_per_unit: 40000,
          description: "Trứng quê, bao sạch, bao ngon, bao bổ, mại dô",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 3,
          name: "Thịt gà",
          category: "Thực phẩm",
          unit: "kg",
          const_per_unit: 180000,
          description: "Gà ta dai ngon nhức lách, tặng kèm muối chanh",
          image: require("../../assets/img/shop.png")
        },
      ]
    },
    {
      id: 2,
      name: "Bán chủ nhật",
      shop_name: "Pet Shop",
      image: require("../../assets/img/shop.png"),
      description: "Chào cả nhà, hôm nay mình lại mở gian hàng quê nhỏ, mong mọi người ủng hộ",
      delivery_deadline_time: "19h30",
      phone_number: "0373607630",
      products: [
        {
          id: 4,
          name: "Sữa chua",
          category: "Thực phẩm",
          unit: "hộp",
          cost_per_unit: 10000,
          description: "Sinh nhật năm nay, em đã nhận được một món quà rất đặc biệt từ bố mẹ. Đó là một chú chó vô cùng đáng yêu.",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 5,
          name: "Trứng gà",
          category: "Thực phẩm",
          unit: "chục",
          const_per_unit: 40000,
          description: "Trứng quê, bao sạch, bao ngon, bao bổ, mại dô",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 6,
          name: "Thịt gà",
          category: "Thực phẩm",
          unit: "kg",
          const_per_unit: 180000,
          description: "Gà ta dai ngon nhức lách, tặng kèm muối chanh",
          image: require("../../assets/img/shop.png")
        },
      ]
    },
    {
      id: 3,
      name: "Bán chủ nhật",
      shop_name: "Pet Shop",
      image: require("../../assets/img/shop.png"),
      description: "Chào cả nhà, hôm nay mình lại mở gian hàng quê nhỏ, mong mọi người ủng hộ",
      delivery_deadline_time: "19h30",
      phone_number: "0373607630",
      products: [
        {
          id: 7,
          name: "Sữa chua",
          category: "Thực phẩm",
          unit: "hộp",
          cost_per_unit: 10000,
          description: "Sinh nhật năm nay, em đã nhận được một món quà rất đặc biệt từ bố mẹ. Đó là một chú chó vô cùng đáng yêu.",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 8,
          name: "Trứng gà",
          category: "Thực phẩm",
          unit: "chục",
          const_per_unit: 40000,
          description: "Trứng quê, bao sạch, bao ngon, bao bổ, mại dô",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 9,
          name: "Thịt gà",
          category: "Thực phẩm",
          unit: "kg",
          const_per_unit: 180000,
          description: "Gà ta dai ngon nhức lách, tặng kèm muối chanh",
          image: require("../../assets/img/shop.png")
        },
      ]
    },
    {
      id: 4,
      name: "Bán chủ nhật",
      shop_name: "Pet Shop",
      image: require("../../assets/img/shop.png"),
      description: "Chào cả nhà, hôm nay mình lại mở gian hàng quê nhỏ, mong mọi người ủng hộ",
      delivery_deadline_time: "19h30",
      phone_number: "0373607630",
      products: [
        {
          id: 10,
          name: "Sữa chua",
          category: "Thực phẩm",
          unit: "hộp",
          cost_per_unit: 10000,
          description: "Sinh nhật năm nay, em đã nhận được một món quà rất đặc biệt từ bố mẹ. Đó là một chú chó vô cùng đáng yêu.",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 11,
          name: "Trứng gà",
          category: "Thực phẩm",
          unit: "chục",
          const_per_unit: 40000,
          description: "Trứng quê, bao sạch, bao ngon, bao bổ, mại dô",
          image: require("../../assets/img/shop.png")
        },
        {
          id: 12,
          name: "Thịt gà",
          category: "Thực phẩm",
          unit: "kg",
          const_per_unit: 180000,
          description: "Gà ta dai ngon nhức lách, tặng kèm muối chanh",
          image: require("../../assets/img/shop.png")
        },
      ]
    }
  ]
  const _renderScheduleItem = ({item}) => (
    <View style={{marginTop: 12}}><ScheduleItem navigation={navigation} schedule={item}/></View>
  )
  return (
    <View style={styles.container}>
      <ListCategory/>
      <FlatList
        data={schedules}
        renderItem={_renderScheduleItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 12}}/>}
      />

    </View>
  )
}

export default Home


