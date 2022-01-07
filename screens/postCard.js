import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import firebase from 'firebase'




export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      post_id:this.props.post.key,
      post_data:this.props.post.value,
     
    };
  }



  render() {
    
    let post=this.state.post_data;
    
  
      return (
        <TouchableOpacity  onPress={
          ()=>{
          
          
            this.props.navigation.navigate("PostScreen",{"post":post})
          }
        }>
          <View style={{marginTop:50,justifyContent:'center'}} >

            <View style={{justifyContent:'center',alignItems:'center',borderWidth:2}} >
              <Text >
                {post.Name}
              </Text>
              <Text >
                {post.Address}
              </Text>
              
           
          </View>
          </View>
        </TouchableOpacity>
      );
    
  }
}

