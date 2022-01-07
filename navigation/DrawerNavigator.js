import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';

import StackNavigator from './StackNavigator';

import firebase from 'firebase';
const Drawer=createDrawerNavigator();






class DrawerNavigator extends React.Component{

     



    render(){ 
      
       
        
        return(
          

            <Drawer.Navigator
            
            
             drawerContent={props=> <CustomSideBarMenu  {...props}/>}

                screenOptions={{headerShown:false,
            
            
            }}
            
            >
         
            <Drawer.Screen name="Home" component={StackNavigator} options={{unmountOnBlur:true}}/>
            
             
             </Drawer.Navigator>
             
         
         
         
         
         )
         

    }
}

export default DrawerNavigator;