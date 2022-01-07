import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import PostScreen from '../screens/postScreen';

const Stack=createStackNavigator();

const StackNavigator=()=>{
return(


   <Stack.Navigator
   screenOptions={{headerShown:false}}
   initialRouteName='Home'
   >

   <Stack.Screen name="Home" component={BottomTabNavigator} options={{unmountOnBlur:true}}/>
   <Stack.Screen name="PostScreen" component={PostScreen} options={{unmountOnBlur:true}}/>
    
    </Stack.Navigator>
    




)
}

export default StackNavigator;