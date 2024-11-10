import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import react, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const HelloUser = ({ route, navigation }) => {
  const {user} = route.params;
  const [list, setlist] = useState([]);
  const [yourJob, setYourJob] = useState('');
  const textInputRef = useRef(null);

  useEffect(() => {
    getList();
  }, []);

  useFocusEffect(
    //Dùng khi màn hình được active
    useCallback(() => {
      getList();
    }, [])
  );

  const getList = () => {
    axios({
      url: 'https://6714624d690bf212c7614a5a.mockapi.io/Test',
      method: 'GET',
    }).then((res) => {
      const response = res.data;
      setlist(response);
    });
  };

  const handelDelete = (item) => {
    axios({
      url: `https://6714624d690bf212c7614a5a.mockapi.io/Test/${item.id}`,
      method: 'DELETE',
    }).then(() => {
      getList();
    });
  };

  const handelItemPress = (item) => {
    setYourJob(item.YourJob);

    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const ItemRender = ({ item }) => (
    <Pressable onPress={() => handelItemPress(item)}>
      <View style={styles.ViewItemRender}>
        <Image source={require('../assets/Frame(4).png')} />
        <Text>{item.YourJob} </Text>
        <Image style={styles.ViewAnhItem} source={{ uri: item.Imgae }} />
        <Pressable onPress={() => handelDelete(item)}>
          <Image source={require('../assets/Rectangle72.png')} />
        </Pressable>
      </View>
    </Pressable>
  );

  const Add = () => {
    navigation.navigate('Add', {
      user
    });
  };

  return (
    <View style={styles.ViewContai}>
      <View style={styles.ViewChuaAnhUser}>
        <Image source={require('../assets/Frame(1).png')} />
        <View style={styles.ViewThongTinUse}>
          <Text>hello {user} </Text>
          <Text>Have a great day ahead </Text>
        </View>
      </View>

      <View style={styles.ViewInputsearch}>
        <Image source={require('../assets/Frame(2).png')} />
        <TextInput
          ref={textInputRef}
          style={styles.TextInput}
          placeholder="Search"
          value={yourJob}
          onChangeText= {(text)=> setYourJob(text)}
        />
      </View>

      <View style={styles.ViewFlatlist}>
        <ScrollView>
          <FlatList
            data={list}
            renderItem={({ item }) => <ItemRender item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>

      <View style={styles.ViewBtnAdd}>
        <Pressable style={styles.BtnAdd} onPress={Add}>
          <Image source={require('../assets/Frame(3).png')} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContai: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  ViewChuaAnhUser: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ViewThongTinUse: {
    padding: 5,
  },
  ViewInputsearch: {
    width: 300,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  TextInput: {
    width: 250,
    height: 40,
    marginLeft: 10,
  },
  ViewFlatlist: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ViewBtnAdd: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewItemRender: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  ViewAnhItem: {
    width: 30,
    height: 30,
  },
  BtnAdd: {
    width: 79,
    height: 79,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
  },
});

export default HelloUser;
