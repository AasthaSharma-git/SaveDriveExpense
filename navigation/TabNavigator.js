import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import GetPicked from '../screens/getPicked';
import PickUp from '../screens/pickUp';


const Tab=createMaterialBottomTabNavigator();
export default class BottomTabNavigator extends React.Component {



  
 
  render(){
    return (

      <Tab.Navigator
         
          labeled={false}
          activeColor='orange'
          barStyle={styles.bottomTabStyle}
      >
        <Tab.Screen name="Get Picked" component={GetPicked} 
        />
        <Tab.Screen name="Pick Up" component={PickUp}
        
        />
      </Tab.Navigator>
   
   
  )
        }
}

const styles=StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:'#002147',
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position:'absolute',
    overflow:'hidden'
    
  },
  icons:{
    width:30,
    height:30
  }
})
