import React, {useCallback, useEffect, useState} from "react";
import {Text, View, FlatList, Image, Pressable, AsyncStorage} from "react-native";
import styles from "./Styles"
import ScheduleItem from "../../components/ScheduleItem";
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from "../../assets/color";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";

const CategoryItem = ({title, icon, onPressCate}) => (
  <Pressable style={styles.categoryItem} onPress={onPressCate}>
    <Icon name={icon} size={30} color={color.green} style={{textAlign: "center"}}/>
    <Text style={styles.textCategory}>{title}</Text>
  </Pressable>
);

const ListCategory = ({navigation, categories}) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem title={item.name} icon={item.icon} onPressCate={() => {
      return navigation.push("SearchPage", {category_id: item.id})
    }}/>
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

  const [categories, setCategories] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const getDataHome = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const resCategories = await fetch(BASE_URL + "/category", {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const resSchedules = await fetch(BASE_URL + "/schedule", {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const resC = await resCategories.json();
      const resS = await resSchedules.json();
      if (!resC.success) return;
      if (!resS.success) return;
      setCategories(resC.data);
      for (let schedule of resS.data) {
        const proNames = [];
        const proImages = [];
        if (schedule.products){
          for (let p of schedule.products) {
            proNames.push(<Text style={styles.product}>{p.name}</Text>);
            proImages.push(`data:image/;base64,${p.image}`);
          }
        }
        schedule["product_names"] = proNames;
        schedule["product_Images"] = proImages;
      }
      setSchedules(resS.data);
    } catch (e) {
      console.log("getDataHome: ", e)
    }
  }

  useFocusEffect(() => {
    getDataHome();
  });
  const _renderScheduleItem = ({item}) => {
    return (
      <View style={{marginTop: 12}}>
        <ScheduleItem navigation={navigation} schedule={item} />
      </View>
    );
  }
  console.log(categories)
  console.log(schedules)
  return (
    <View>
      <ListCategory navigation={navigation} categories={categories}/>
      <View style={styles.container}>
        {schedules ? (
          <FlatList
            data={schedules}
            renderItem={_renderScheduleItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{height: 12}}/>}
          />
        ) : null}
      </View>
    </View>
  )
}

export default Home


