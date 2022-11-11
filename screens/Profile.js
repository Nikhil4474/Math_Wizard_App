import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { Avatar } from 'react-native-elements';
import {ImagePicker} from 'expo-image-picker';
import *as Permissions from 'expo-permissions';

export default class Profile extends React.Component {
  constructor(){
    super()
    this.state={
      useId:firebase.auth().currentUser.email,
      image:"",
      name:"",
      docId:"",
    }
  }
  selectPicture=async()=>{
    const {cancelled,uri}=await ImagePicker.launchImageLibraryAsync({
      allowEditing:true,
      aspect:[4,3],
      quality:1,
      mediaTypes:ImagePicker.MediaTypeOptions.all
    });
    console.log("what is cancelled", cancelled)
    console.log("what is uri", uri)

    // if(!cancelled){
    //   this.uploadImage(this.state.useId)
    // }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItem: 'center',
            backgroundColor: 'white',
          }}>
          <Avatar rounded showEditButton size={'large'} containerStyle={{
            backgroundColor:'white',
            width:100,
            height:100,
            borderraidus: 100,
          }}
            onPress={()=>{
              this.selectPicture();
            }}
          />
        </View>
      </View>
    );
  }
}
