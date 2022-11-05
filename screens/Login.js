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
// import firebase from 'firebase'
import db from '../config';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      contact: '',
      address: '',
      firstName: '',
      lastName: '',
      age: '',
      confirmPassword: '',
      isModalVisible: false,
    };
  }

  showModal = () => {
    return (
      <Modal
        animationType={'side'}
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={[styles.signupText, { marginTop: RFValue(35) }]}>
              Sign Up
            </Text>
          </View>

          <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="First Name"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
              keyboardtype={'default'}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  lastName: text,
                });
              }}
              keyboardtype={'default'}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  contact: text,
                });
              }}
              keyboardtype={'email-address'}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Phone Number"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
              keyboardtype={'phone-pad'}
            />
          </View>
        </ScrollView>
      </Modal>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
        {this.showModal()}
        <View></View>

        <View style={styles.TextInput}>
          <TextInput
            style={styles.loginBox}
            placeholder="Email Id"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
            keyboardtype={'email-address'}
            value={this.state.emailId}
          />
          <TextInput
            style={[styles.loginBox, { marginTop: RFValue(15) }]}
            placeholder="Password"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
            keyboardtype={'default'}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>

        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('bottomTab');
            }}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({
                isModalVisible: true,
              });
            }}
          >
            <Text style={styles.buttonText}>Signup In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fc0b8',
  },
  loginBox: {
    width: '80%',
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: '#ffffff',
    fontSize: RFValue(20),
    paddingLeft: RFValue(10),
  },
  button: {
    width: '80%',
    height: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#ffff',
    shadowColor: '#c00',
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#32867d',
    fontWeight: '200',
    fontSize: RFValue(20),
  },
  label: {
    fontSize: RFValue(13),
    color: '#717D7E',
    fontWeight: 'bold',
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20),
  },
  formInput: {
    width: '90%',
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
  },
  registerButton: {
    width: '75%',
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(3),
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: 'bold',
    color: '#fff',
  },
  cancelButtonText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#32867d',
    marginTop: RFValue(10),
  },
  scrollview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signupView: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#32867d',
  },
  santaView: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  santaImage: {
    width: '70%',
    height: '100%',
    resizeMode: 'stretch',
  },
  TextInput: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookImage: {
    width: '100%',
    height: RFValue(220),
  },
});
