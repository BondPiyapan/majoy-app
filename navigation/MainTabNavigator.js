import React from 'react';
import { Platform, Text, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import * as Icon from '@expo/vector-icons'

import HomeScreen from '../screen/Main/HomeScreen';
import ProfileScreen from '../screen/Main/Profile/ProfileScreen';
import ChatScreen from '../screen/Main/Chat/ChatScreen';

import CountLike from '../screen/Main/CountLike';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
      text: state.global
  }
}

const mapDispatchToProps = dispatch => {
  return {
      upDateText: (text) => {
          dispatch({type: 'EDIT_GLOBAL', payload: text})
      }
  }
}

const Main = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Login',
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
          backgroundColor: "transparent",
          opacity: 0.99
        },
      })
    },
  },
);

Main.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? require('../assets/images/majoy.png') : require('../assets/images/majoy_cccccc.png')}
        style={{
          marginLeft: 1,
          marginTop: 1,
          width: 25,
          height: 25,
        }}
      />
    ),
  }
};


const Profile = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
  }
);

Profile.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused }) => (
      <Icon.FontAwesome
        name='user'
        size={26}
        style={{ marginBottom: -3, alignItems: 'center', justifyContent: 'center' }}
        color={focused ? '#FF99CC' : '#ccc'}
      />
    ),
  }
};

const Chat = createStackNavigator(
  {
    ChatScreen: {
      screen: ChatScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Login'
      })
    },
  }
);

Chat.navigationOptions = ({ navigation, screenProps }) => {
  const coutlike = navigation.state.index
  return {
    tabBarIcon: ({ focused }) => (
        <CountLike focused={focused} />
    ),
  }
};

export default createMaterialTopTabNavigator(
  {
    Profile,
    Main,
    Chat
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Main',
    activeTintColor: '#F44336',
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      labelStyle: {
        fontSize: 12,
        color: '#000'
      },
      iconStyle: { width: 50, alignItems: 'center' },
      style: {
        backgroundColor: '#fff',
        marginTop: 30,
        elevation: 0
      },
      indicatorStyle: { backgroundColor: "#ffffff" }
    }
  },
);