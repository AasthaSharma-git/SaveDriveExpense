import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";

import firebase from "firebase";



export default class PostScreen extends React.Component {
  
  

 

  

  render() {
  
      return (
       

        
          <View>
            <ScrollView >

             
                <View style={{marginTop:50}} >
                  <Text >
                    {this.props.route.params.post.Name}
                  </Text>
                  <Text >
                    {this.props.route.params.post.Address}
                  </Text>
                 
                 </View>
           
            </ScrollView>
          </View>
        
      );
    
  }
}

