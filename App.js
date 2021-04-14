import React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView,  AppRegistry, YellowBox,  I18nManager as RNI18nManager, } from 'react-native';
import { AppLoading, Notifications } from 'expo';
import * as Icon from '@expo/vector-icons'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import AppNavigator from './navigation/AppNavigator';

import reducer from './redux/reducer';

import { Provider } from 'react-redux'; // <---- 
import { createStore } from 'redux';    // <----

const store = createStore(reducer);  

YellowBox.ignoreWarnings(['Warning:']);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    likeCount: 8
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <Provider store={store}> 
          <AppNavigator screenProps={{unreadMessagesCount: this.state.likeCount}} />
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/profile/1/1.jpg'),
        require('./assets/profile/1/2.jpg'),
        require('./assets/profile/1/3.jpg'),
        require('./assets/profile/1/4.jpg'),
        require('./assets/profile/2/1.jpg'),
        require('./assets/profile/2/2.jpg'),
        require('./assets/profile/2/3.jpg'),
        require('./assets/profile/2/4.jpg'),
        require('./assets/profile/3/1.jpg'),
        require('./assets/profile/3/2.jpg'),
        require('./assets/profile/3/3.jpg'),
        require('./assets/profile/4/1.jpg'),
        require('./assets/profile/4/2.jpg'),
        require('./assets/profile/4/3.jpg'),
        require('./assets/profile/5/1.jpg'),
        require('./assets/profile/5/2.jpg'),
        require('./assets/profile/5/3.jpg'),
        require('./assets/profile/6/1.jpg'),
        require('./assets/profile/6/2.jpg'),
        require('./assets/profile/6/3.jpg'),
        require('./assets/profile/7/1.jpg'),
        require('./assets/profile/7/2.jpg'),
        require('./assets/profile/7/3.jpg'),
        require('./assets/profile/8/1.jpg'),
        require('./assets/profile/8/2.jpg'),
        require('./assets/profile/8/3.jpg'),
        require('./assets/profile/9/1.jpg'),
        require('./assets/profile/9/2.jpg'),
        require('./assets/profile/9/3.jpg'),
        require('./assets/profile/10/1.jpg'),
        require('./assets/profile/10/2.jpg'),
        require('./assets/profile/10/3.jpg'),
        require('./assets/images/Icon_vip.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'sukhumvit-set': require('./assets/fonts/SukhumvitSet-Text.ttf'),
        'sukhumvit-set-bold': require('./assets/fonts/SukhumvitSet-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});