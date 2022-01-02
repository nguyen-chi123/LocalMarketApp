import React, {useEffect, useState} from "react";
import {Text, View, Pressable, TextInput, FlatList, ScrollView, AsyncStorage} from "react-native";
import styles from "./Styles"
import CheckBox from "@react-native-community/checkbox";
import ScheduleItem from "../../components/ScheduleItem";
import {fetch} from "react-native/Libraries/Network/fetch";

const SearchPage = ({navigation, route}) => {
  const [categories, setCategories] = useState({});
  const [search, setSearch] = useState(null);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.input}>
          <TextInput
            value={search}
            style={styles.searchInput}
            placeholder={'Tìm kiếm ...'}
            returnKeyType={"search"}
            onChangeText={setSearch}
          />
        </View>
      ),
    });
  }, [navigation]);
  const getCategory = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + "/category", {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + TOKEN},
      });
      const data = await res.json();
      console.log(data)
      if (!data.success) return;
      for (const cate of data.data) {
        cate["checked"] = false
      }
      setCategories(data.data);
      console.log(categories)
    } catch (e) {
      console.log("getCategory:", e)
    }
  }
  useEffect(() => {
    getCategory();
  }, [])

  const CategoryCheckBox = ({checked, title, id}) => {
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
    return (<CategoryCheckBox checked={item.checked} title={item.name} id={item.id}
    />)
  };
  // const {category_id} = route.params ? route.params : null
  const [schedules, setSchedules] = useState([]);
  // const getScheduleByCategory = async () => {
  //   try {
  //     const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
  //     const res = await fetch(BASE_URL + `/`, {
  //       method: 'GET',
  //       headers: {'Authorization': 'Bearer ' + TOKEN}
  //     });
  //     const data = await res.json();
  //     if (!data.success) return;
  //     setSchedules(data.data);
  //   } catch (e) {
  //     console.log("getScheduleByCategory:", e)
  //   }
  // }

  const getScheduleBySearch = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
      const res = await fetch(BASE_URL + `/search?search=${search}`, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + TOKEN}
      });
      const data = await res.json();
      if (!data.success) return;
      setSchedules(data.data);
    } catch (e) {
      console.log("getScheduleSearch:",e)
    }
  }
  useEffect(() => {
    getScheduleBySearch();
    }, [search]);
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
        <Pressable style={styles.filter} onPress={getScheduleBySearch}>
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
