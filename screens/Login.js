import React from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
// import firebase from 'firebase';

export default class Login extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <TouchableOpacity>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
