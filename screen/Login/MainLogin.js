import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { WebBrowser, Notifications } from 'expo';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import { LinearGradient } from 'expo-linear-gradient';

export default class MainLogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: ''
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.iconcenter}>
          <Images
            width={width * .3}
            source={require('../../assets/images/logo_MAJOY.png')}
          />
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={styles.getStartedContainer}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('LoginScreen')}
              style={[styles.button, styles.buttonMobile]}>
              <Text style={styles.buttonText}>Login with Mobile</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  iconcenter: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  map: {
    flex: 1,
  },
  button: {
    height: 50,
    width: width * .8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonMobile: {
    backgroundColor: '#FF99CC',
  },
  getStartedContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
});
