import React, {useState} from "react";
import {Text, View, Pressable, TextInput, FlatList, ScrollView} from "react-native";
import styles from "./Styles"
import CheckBox from "@react-native-community/checkbox";
import ScheduleItem from "../../components/ScheduleItem";

const SearchPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.input}>
          <TextInput
            style={styles.searchInput}
            placeholder={'Tìm kiếm ...'}
          />
        </View>
      ),
    });
  }, [navigation]);
  const categories =[
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
  for (const cate of categories) {
    cate["checked"] = false
  }
  const [priceMax, setPriceMax] = useState(false);
  const [priceMin, setPriceMin] = useState(true);
  console.log(categories)
  const CategoryCheckBox = ({checked, title, id}) => {
    console.log("start", categories)
    const [check, setCheck] = useState(checked)
    return (
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={check}
          onValueChange={() => {
            setCheck(!check)
            categories[id-1].checked = !check
          }}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{title}</Text>
      </View>
    );
  }
  const _renderCategory = ({item}) => {
    return (<CategoryCheckBox checked={item.checked} title={item.title} id={item.id}
    />)
  };
  const schedules = [
    {
      id: 1,
      name: "Bán thứ 2",
      shop_name: "Pet Shop",
      image: require("../../assets/img/shop.png"),
      description: "Chào cả nhà, hôm nay mình lại mở gian hàng quê nhỏ, mong mọi người ủng hộ",
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

  const _renderSchedule = ({item}) => (
    <View style={{marginTop: 12}}>
      <ScheduleItem navigation={navigation} schedule={item}/>
    </View>
  )
  return (
    <View style={styles.container} >
      <View style={styles.listCategory}>
        <Text style={styles.titleFilter}>Danh mục</Text>
        <FlatList
          data={categories}
          renderItem={_renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.actionSearch}>
        <View style={styles.price}>
          <Text style={styles.titleFilter}>Giá:</Text>
          <View style={styles.textMaxMin}>
            <Pressable style={{marginRight: 20, marginLeft: 20}} onPress={() => {
              setPriceMax(!priceMax)
              setPriceMin(false)
            }}><Text style={priceMax ? styles.selected : styles.notSelect}>cao</Text></Pressable>
            <Pressable style={{marginRight: 30}} onPress={() => {
              setPriceMax(false)
              setPriceMin(!priceMin)
            }}><Text style={priceMin ? styles.selected : styles.notSelect}>thấp</Text></Pressable>
          </View>
        </View>
        <Pressable style={styles.filter}>
          <Text style={{color: "#fff", fontSize: 15}}>Lọc</Text>
        </Pressable>
      </View>
      <View style={styles.resSearch}>
        <FlatList
          ListHeaderComponent={<Text style={styles.titleResSearch}>Kết quả tìm kiếm</Text>}
          data={schedules}
          renderItem={_renderSchedule}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 12}}/>}
        />
      </View>
    </View>
  );
}

export default SearchPage
