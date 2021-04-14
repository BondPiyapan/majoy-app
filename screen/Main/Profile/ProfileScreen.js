import React from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage,
  Switch
} from 'react-native';
import { WebBrowser, Notifications } from 'expo';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import { LinearGradient } from 'expo-linear-gradient';
import * as Icon from '@expo/vector-icons'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Slider from "react-native-smooth-slider";
let appjson = require('../../../app.json');
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      isEnabled: true,
      device_token: '',
      value: 0,
      valueAge: [18, 30]
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 20 }}>
            <ImageBackground style={{
              height: 150,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 75,
            }}
              imageStyle={{ borderRadius: 90 }}
              source={{ uri: 'http://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png' }}
            >
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 10,
                  height: 50,
                  width: 50,
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: '#FF0066'
                }}>
                <Icon.Entypo
                  size={20}
                  name="camera"
                  color="#fff"
                  style={styles.iconButtons}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{ marginLeft: 25, marginTop: 5 }}>
            <Text style={styles.buttonText2}>การตั้งค่าบัญชี</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', width: width * .9, alignItems: 'center', flexDirection: 'row', padding: 15, borderRadius: 5, elevation: 1 }}>
              <Text style={styles.buttonText}>หมายเลขโทรศัพท์</Text>
              <Text style={styles.buttonTextRight}>0909187351</Text>
              <Icon.Entypo style={{ position: 'absolute', right: 10 }} name="chevron-small-right" size={25} color="#999999" />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 25, marginTop: 5 }}>
            <Text style={styles.buttonText1}>ยืนยันหมายเลขโทรศัพท์เพื่อความปลอดภัยของคุณ</Text>
          </View>

          <View style={{ marginLeft: 25, marginTop: 5 }}>
            <Text style={styles.buttonText2}>การตั้งค่าการค้นพบ</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{ backgroundColor: '#fff', width: width * .9, alignItems: 'center', flexDirection: 'row', padding: 15, borderRadius: 5, elevation: 1 }}>
              <Text style={styles.buttonText}>แสดงทั้งหมด</Text>
              <Switch
                style={{ position: 'absolute', right: 10 }}
                trackColor={{ false: "#767577", true: "#FF99CC" }}
                thumbColor={this.state.isEnabled ? "#FF0066" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={value => this.setState({ isEnabled: value })}
                value={this.state.isEnabled}
              />
            </View>
          </View>
          <View style={{ marginLeft: 25, marginTop: 5 }}>
            <Text style={styles.buttonText1}>แสดงทั้งหมด</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', width: width * .9, alignItems: 'center', flexDirection: 'row', padding: 15, borderRadius: 5, elevation: 1 }}>
              <Text style={styles.buttonText}>ตำแหน่งพิกัด</Text>
              <Icon.Entypo style={{ position: 'absolute', right: 10 }} name="chevron-small-right" size={25} color="#999999" />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 25, marginTop: 5 }}>
            <Text style={styles.buttonText1}>เปลี่ยนตำแหน่งที่ตั้งของคุณเพื่อปัดดูสมาชิก Majoy ในเมือง อื่นๆ</Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 5 }}>
            <View
              style={{ backgroundColor: '#fff', borderRadius: 5, elevation: 1 }}>
              <View style={{ flexDirection: 'row', width: width * .9, alignItems: 'center', padding: 15, }}>
                <Text style={styles.buttonTextHead}>ระยะทางสูงสุด</Text>
                <Text style={styles.buttonTextRight}>{this.state.value} กม.</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Slider
                  step={1}
                  value={this.state.value}
                  style={{ width: width * .7, height: 40 }}
                  minimumValue={0}
                  maximumValue={100}
                  thumbTintColor="#FF0066"
                  minimumTrackTintColor="#FF99CC"
                  trackStyle={{ backgroundColor: '#ccc' }}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
            </View>
          </View>



          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <View
              style={{ backgroundColor: '#fff', borderRadius: 5, elevation: 1 }}>
              <View style={{ flexDirection: 'row', width: width * .9, alignItems: 'center', padding: 15, }}>
                <Text style={styles.buttonTextHead}>แสดงให้เห็น</Text>
              </View>
              <View style={{ flexDirection: 'row', width: width * .9, alignItems: 'center', padding: 15, marginTop: -10 }}>
                <Text style={styles.buttonText}>ผู้หญิง</Text>
                <Icon.Entypo style={{ position: 'absolute', right: 10 }} name="chevron-small-right" size={25} color="#999999" />
              </View>
            </View>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
            <View
              style={{ backgroundColor: '#fff', borderRadius: 5, elevation: 1 }}>
              <View style={{ flexDirection: 'row', width: width * .9, alignItems: 'center', padding: 15, }}>
                <Text style={styles.buttonTextHead}>อายุระหว่าง</Text>
                <Text style={styles.buttonTextRight}>{this.state.valueAge[0]} - {this.state.valueAge[1]}</Text>
              </View>
              <View style={{ alignItems: 'center', marginTop: -10 }}>
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: '#FF99CC',
                  }}
                  markerStyle={{
                    backgroundColor: '#FF0066',
                    width: 20,
                    height: 20,
                    borderColor: '#FF0066'
                  }}
                  trackStyle={{
                    height: 4,
                    backgroundColor: '#ccc'
                  }}
                  values={[this.state.valueAge[0], this.state.valueAge[1]]}
                  sliderLength={260}
                  onValuesChange={value => this.setState({ valueAge: value })}
                  min={18}
                  max={55}
                  step={1}
                  allowOverlap
                  snapped
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 30 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
              style={[styles.button, styles.buttonMobile]}>
              <Text style={{
                fontSize: 14,
                color: '#fff',
                fontFamily: 'sukhumvit-set',
              }}>Logout</Text>
            </TouchableOpacity>
            <Text style={[styles.buttonText,{marginTop: 10}]}>Version {appjson.expo.version}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#FF0066',
  },
  getStartedContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0
  },
  buttonText1: {
    width: width * .9,
    fontSize: 12,
    color: '#778899',
    fontFamily: 'sukhumvit-set',
    alignItems: 'flex-start'
  },
  buttonText2: {
    fontSize: 18,
    color: '#778899',
    fontFamily: 'sukhumvit-set-bold',
    alignItems: 'flex-start'
  },
  buttonText: {
    fontSize: 14,
    color: '#778899',
    fontFamily: 'sukhumvit-set',
  },
  buttonTextRight: {
    fontSize: 14,
    color: '#778899',
    fontFamily: 'sukhumvit-set',
    position: 'absolute', right: 40
  },
  buttonTextHead: {
    fontSize: 16,
    color: '#FF99CC',
    fontFamily: 'sukhumvit-set-bold',
  },



});
