import React from 'react';
import { Platform, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import MainLogin from '../screen/Login/MainLogin';
import LoginScreen from '../screen/Login/LoginScreen'
import OtpVerifyScreen from '../screen/Login/OtpVerifyScreen'

import ProvisionScreen from '../screen/Login/Register/ProvisionScreen';
import RegisterProfileScreen from '../screen/Login/Register/RegisterProfileScreen';

export default createStackNavigator(
  {
    MainLogin: {
      screen: MainLogin,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    OtpVerifyScreen: {
      screen: OtpVerifyScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
    ProvisionScreen: {
      screen: ProvisionScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Register',
        headerLeft: ()=> null,
        gestureEnabled: false,
      })
    },
    RegisterProfileScreen: {
      screen: RegisterProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Register',
        headerLeft: ()=> null,
        gestureEnabled: false,
      })
    },
  }
);