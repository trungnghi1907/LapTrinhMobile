import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import react, { useState } from 'react';

const ManageYourTask = ({navigation}) => {
  const [user, setuser] = useState('');
  

  function ChangeText(text) {
    setuser(text);
    
  }

  function getstart(){
    
    navigation.navigate('Hello', {user})
  }
  return (
    <View style={styles.container}>
      <View style={styles.ViewBucANH}>
        <Image
          style={styles.Imgae1}
          source={require('../assets/Image95.png')}
        />
      </View>

      <View style={styles.ViewBucANH}>
        <Text style={styles.Text}>MANAGE YOUR</Text>
        <Text style={styles.Text}>TASK</Text>

        <View style={styles.ViewTextInput}>
          <Image
            style={styles.Image2}
            source={require('../assets/Frame.png')}
          />
          <TextInput
            onChangeText={ChangeText}
            style={styles.TextInput}
            placeholder="Enter Your Name"/>
        </View>

        <View style={styles.ViewPress}>
          <Pressable style={styles.Pressable}
            onPress ={getstart}
          >
            <Text style={styles.textPress}>GET STARTED -{'>'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEE1E62B',
  },
  ViewBucANH: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imgae1: {
    width: 271,
    height: 271,
  },
  Image2: {
    width: 21,
    height: 21,
  },
  TextInput: {
    width: 250,
    height: 40,
    marginLeft: 10,
    padding: 10,
  },
  ViewTextInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 20,
  },
  ViewPress: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8353E2',
  },
  Pressable: {
    backgroundColor: '#00BDD6',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textPress: {
    color: 'white',
  },
});

export default ManageYourTask;
