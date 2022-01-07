import React from 'react';
import {Text,View,StyleSheet,StatusBar,Platform,SafeAreaView,Image,FlatList} from 'react-native';
import PostCard from './postCard'


import firebase from 'firebase'


export default class PickUp extends React.Component{
    constructor(){
        super();
        this.state={
          
            posts:[]
        }
    }
    fetchPosts(){
      firebase
        .database()
        .ref("/posts/")
        .on("value", (snapshot)=>{
          let posts=[]
          if(snapshot.val()){
            Object.keys(snapshot.val()).forEach(function (key){
              posts.push({
                key:key,
                value:snapshot.val()[key]
              })
              
            })
           this.setState({posts:posts})
           
          }

        }),function errorObject(){
          console.log("Read Failed :"+errorObject.code)
        } 






    }
  
   
    componentDidMount(){
      
        this.fetchPosts()
    }
    renderItem = ({ item: post }) => {
        return <PostCard post={post} navigation={this.props.navigation}/>;
      };
    render(){
      
            return(
               
             <View>
                  
                  {
                    !this.state.posts[0]?
                    <View >
                      <Text >No Posts Available</Text>
                      </View>
                    
                    :
                    <View >
                    <FlatList
                       keyExtractor={this.keyExtractor}
                      data={this.state.posts}
                      renderItem={this.renderItem}
                     />
                   </View>
                   
                   }
                 
                 </View>

               








            )
        
       
    }
}
