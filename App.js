import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetPicked from './screens/getPicked';
import PickUp from './screens/pickUp';
import { firebaseConfig } from './config';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase'
import DrawerNavigator from './navigation/DrawerNavigator';

if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig)  
}
else{
  firebase.app()
}
export default function App() {
  return (
   <NavigationContainer>
     <DrawerNavigator/>
   </NavigationContainer>
  );
}
