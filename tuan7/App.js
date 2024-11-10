import { Text, SafeAreaView, StyleSheet, View, ScrollView, FlatList} from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import ManageYourTask from './Screen/ManageYourTask'
import HelloUser from './Screen/Hello'
import AddScreen from './Screen/Add'
export default function App() {
   const Stack = createStackNavigator();
  return (
 
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name = 'Manage' component = {ManageYourTask} />
          <Stack.Screen name = 'Hello' component ={HelloUser} /> 
          <Stack.Screen name = 'Add' component ={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}


