import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import react, { useState, useEffect } from 'react';
import axios from 'axios'

const AddScreen = ({ route, navigation }) => {
  const {user} = route.params;
  const [yourJob, setYourJob] = useState('');
  const ChangeText = (text) => {
    setYourJob(text);
  };
  const handelCreate = () => {
    var data = {
      "Imgae": 'https://picsum.photos/200/300',
      "YourJob": yourJob,
    };
    axios({
      url: 'https://6714624d690bf212c7614a5a.mockapi.io/Test',
      method: 'POST',
      data: data
    }).then(() => {
      navigation.navigate('Hello',{user});
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
      <View style={styles.ViewTextInput}>
        <TextInput
          onChangeText={ChangeText}
          style={styles.TextInout}
          placeholder="Enter your Job"
        />
      </View>

      <View style={styles.ViewBtn}>
        <Button onPress={handelCreate} title="Finish" />
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
  ViewTextInput: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewBtn: {
    flex: 7,
    justifyContent: 'center',
  },
  TextInout: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddScreen;
