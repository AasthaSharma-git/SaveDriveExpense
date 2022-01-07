import React from 'react'
import { StyleSheet,Text,View,TextInput,Button,TouchableOpacity,ToastAndroid} from 'react-native'
import firebase from 'firebase';

export default class GetPicked extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            phone:null
        }
    }
    upload=()=>{
        const {name,address,phone}=this.state;
        if(name&&address&&phone){
           const data={
               'Name':name,
               'Address':address,
               'PhoneNumber':phone,
               'DriveCompleted':false
           }
           
           firebase
           .database()
           .ref('/posts/'+Math.random().toString(36).slice(2))
           .set(data)
           .then(function (snapshot){
           
               ToastAndroid.show('Request Uploaded!',ToastAndroid.SHORT)
               
           })
            
        }
        else{
            alert('Enter all details!')
        }
    }
    render(){
        return(
            <View>
                <TextInput 
                        style={styles.input}
                        placeholder='Name'
                        onChangeText={(text)=>this.setState({name:text})} />

                <TextInput 
                        style={styles.input}
                        placeholder='Address'
                        onChangeText={(text)=>this.setState({address:text})} />  

                 <TextInput 
                        style={styles.input}
                        placeholder='Mobile number'
                        onChangeText={(text)=>this.setState({phone:text})} />  

               <TouchableOpacity 
               style={styles.button}
               onPress={this.upload}
               >
            
                   <Text>Submit</Text>
               </TouchableOpacity>
            </View>        
        )
    }
}

const styles=StyleSheet.create({
    input:{
        borderWidth:2,
        marginTop:50
    },
    button:{
        marginTop:50,
        width:100,
        height:50,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    }
})