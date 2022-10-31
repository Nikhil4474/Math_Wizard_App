import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CamScanner from "../screens/CamScanner"
import Search from '../screens/Search';
import History from '../screens/History';
import {Feather} from 'react-native-vector-icons'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              var iconName;
              if (route.name === 'CamScanner') {
                iconName = 'camera';
              } else if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'History') {
                iconName = 'list';
              }
              return <Feather name={iconName} size={size} color={color} />;
            },
            headerShown: false,
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'green',
            style: {
              height: 50,
              borderTopWidth: 0,
              backgroundColor: 'white',
            },
            lableStyle: {
              fontSize: 20,
            },
          }}
        >
          <Tab.Screen name="CamScanner" component={CamScanner} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}