import React from 'react';
import {
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  Modal
} from 'react-native';
import { WebBrowser, Notifications } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';
import Carousel from 'react-native-snap-carousel';
import CarouselBanner from 'react-native-banner-carousel';
import normalize from 'react-native-normalize';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange,
  removeOrientationListener} from 'react-native-responsive-screen';
// const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width * .9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
const aspectRatio = height / width;
import * as Icon from '@expo/vector-icons'
const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
}

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    text: state.global
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upDateText: (text) => {
      dispatch({ type: 'EDIT_GLOBAL', payload: text.id })
    },
    upDateText2: () => {
      dispatch({ type: 'ADD_COUNT' })
    }
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props)
    this._renderItem = this._renderItem.bind(this)
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      showAlbum: false,
      dataAlbum: null,
      user: [
        {
          id: "1",
          uri: require('../../assets/profile/1/1.jpg'),
          name: 'Milk',
          like: 'N',
          age: '20',
          sex: 'F',
          album: [
            require('../../assets/profile/1/1.jpg'),
            require('../../assets/profile/1/2.jpg'),
            require('../../assets/profile/1/3.jpg'),
            require('../../assets/profile/1/4.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/2/1.jpg'),
          name: 'Bell',
          like: 'N',
          age: '20',
          sex: 'B',
          album: [
            require('../../assets/profile/2/1.jpg'),
            require('../../assets/profile/2/2.jpg'),
            require('../../assets/profile/2/3.jpg'),
            require('../../assets/profile/2/4.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/3/1.jpg'),
          name: 'Kat',
          like: 'N',
          age: '20',
          sex: 'B',
          album: [
            require('../../assets/profile/3/1.jpg'),
            require('../../assets/profile/3/2.jpg'),
            require('../../assets/profile/3/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/4/1.jpg'),
          name: 'Earth',
          like: 'N',
          age: '20',
          sex: 'M',
          album: [
            require('../../assets/profile/4/1.jpg'),
            require('../../assets/profile/4/2.jpg'),
            require('../../assets/profile/4/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/5/1.jpg'),
          name: 'Yu',
          like: 'N',
          age: '20',
          sex: 'M',
          album: [
            require('../../assets/profile/5/1.jpg'),
            require('../../assets/profile/5/2.jpg'),
            require('../../assets/profile/5/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/6/1.jpg'),
          name: 'Frank',
          like: 'N',
          age: '20',
          sex: 'M',
          album: [
            require('../../assets/profile/6/1.jpg'),
            require('../../assets/profile/6/2.jpg'),
            require('../../assets/profile/6/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/7/1.jpg'),
          name: 'Nesz',
          like: 'N',
          age: '20',
          sex: 'F',
          album: [
            require('../../assets/profile/7/1.jpg'),
            require('../../assets/profile/7/2.jpg'),
            require('../../assets/profile/7/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/8/1.jpg'),
          name: 'Fair',
          like: 'N',
          age: '20',
          sex: 'F',
          album: [
            require('../../assets/profile/8/1.jpg'),
            require('../../assets/profile/8/2.jpg'),
            require('../../assets/profile/8/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/9/1.jpg'),
          name: 'Frame',
          like: 'N',
          sex: 'B',
          age: '20',
          album: [
            require('../../assets/profile/9/1.jpg'),
            require('../../assets/profile/9/2.jpg'),
            require('../../assets/profile/9/3.jpg'),
          ]
        },
        {
          id: "1",
          uri: require('../../assets/profile/10/1.jpg'),
          name: 'Jenni',
          like: 'N',
          age: '20',
          sex: 'F',
          album: [
            require('../../assets/profile/10/1.jpg'),
            require('../../assets/profile/10/2.jpg'),
            require('../../assets/profile/10/3.jpg'),
          ]
        },
      ],
      index: 0
    }
  }

  UNSAFE_componentWillMount() {
    listenOrientationChange(this);
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  renderUsers = () => {
    return this.state.user.map((item, i) => {
      return (
        <Animated.View style={{ height: height - 120, width: width, padding: 10, position: 'absolute' }}>
          <Image
            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
            source={this.state.user[0].uri}
          />
        </Animated.View>
      )
    })
  }

  onLike(item) {
    // this.props.upDateText2()
    var array = [...this.state.user];
    var index = array.findIndex(el => el.name === item.name)
    console.log('item', index)
    array[index] = {
      id: item.id,
      uri: item.uri,
      name: item.name,
      like: 'Y',
      age: item.age,
      sex: item.sex,
      album: item.album
    };
    this.setState({
      user: array, dataAlbum: {
        id: item.id,
        uri: item.uri,
        name: item.name,
        like: 'Y',
        age: item.age,
        sex: item.sex,
        album: item.album
      }
    });
  }

  onDisLike(item) {
    var array = [...this.state.user];
    var index = array.findIndex(el => el.name === item.name)
    console.log('item2', index)
    array[index] = {
      id: item.id,
      uri: item.uri,
      name: item.name,
      like: 'N',
      age: item.age,
      sex: item.sex,
      album: item.album
    };
    this.setState({
      user: array, dataAlbum: {
        id: item.id,
        uri: item.uri,
        name: item.name,
        like: 'N',
        age: item.age,
        sex: item.sex,
        album: item.album
      }
    });
  }

  renderPage(image, index) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'space-around', marginTop: 50, }} key={index}>
        <ImageBackground style={{width: wp('85%'), height: hp('75%')}} borderRadius={10} source={image} >
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.61)']}
            style={{ padding: 15, position: 'absolute', bottom: 0, width: width * .85, borderRadius: 10, height: 150 }} />
          <View style={{ position: 'absolute', bottom: 20, left: 20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                color: '#fff',
                fontSize: 26,
                fontFamily: 'sukhumvit-set-bold',
              }}>{this.state.dataAlbum.name}</Text>
              <Text style={{
                marginLeft: 10,
                color: '#fff',
                fontSize: 24,
                fontFamily: 'sukhumvit-set',
              }}>{this.state.dataAlbum.age}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Icon.Entypo
                size={20}
                name="location-pin"
                color="#fff"
                style={styles.iconButtons}
              />
              <Text style={{
                marginLeft: 5,
                color: '#fff',
                fontSize: 16,
                fontFamily: 'sukhumvit-set',
              }}>ห่างออกไป 10 กม.</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'sukhumvit-set',
              }}>รายละเอียด</Text>
            </View>
          </View>
          {this.state.dataAlbum.sex == 'F' ? <View style={{ position: 'absolute', bottom: 20, right: 20, }}>
            <Images width={width * 0.15} source={(require('../../assets/images/Icon_vip.png'))} />
          </View> : null}
        </ImageBackground>
      </View>
    );
  }

  renderAlbum() {
    if (this.state.dataAlbum == null) {
      return null
    } else {
      return (
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Modal
            transparent={true}
            visible={this.state.showAlbum}
            onRequestClose={() => {
              this.setState({showAlbum: false})
            }}
          >
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)', height: height }}>
              <CarouselBanner
                autoplay={false}
              >
                {this.state.dataAlbum.album.map((image, index) => this.renderPage(image, index))}
              </CarouselBanner>
              <View style={{ alignItems: 'center', marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>

                {this.state.dataAlbum.like == 'N' ?
                  <TouchableOpacity onPress={() => this.onLike(this.state.dataAlbum)}
                    style={{ height: 60, width: 60, backgroundColor: '#fff', borderRadius: 30, elevation: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon.AntDesign
                      size={30}
                      name="heart"
                      color="#999"
                      style={{ marginTop: 5 }}
                    />
                  </TouchableOpacity> :
                  <TouchableOpacity onPress={() => this.onDisLike(this.state.dataAlbum)}
                    style={{ height: 60, width: 60, backgroundColor: '#fff', borderRadius: 30, elevation: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon.AntDesign
                      size={30}
                      name="heart"
                      color="#FF0066"
                      style={{ marginTop: 5 }}
                    />
                  </TouchableOpacity>
                }

                <TouchableOpacity onPress={() => { this.setState({ showAlbum: false }) }}
                  style={{ height: 60, width: 60, backgroundColor: '#fff', borderRadius: 30, elevation: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 30 }}>
                  <Icon.AntDesign
                    size={30}
                    name="close"
                    color="#000"
                    style={{ marginTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      );
    }

  }

  _renderItem= ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => {this.setState({ showAlbum: true, dataAlbum: item })}}
        >
          <ImageBackground
            style={{width: wp('85%'), height: hp('75%')}}
            source={item.uri}
            borderRadius={10}
          >
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.61)']}
              style={{ padding: 15, position: 'absolute', bottom: 0, width: width * .85, borderRadius: 10, height: 150 }} />
            <View style={{ position: 'absolute', bottom: 20, left: 20, }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 26,
                  fontFamily: 'sukhumvit-set-bold',
                }}>{item.name}</Text>
                <Text style={{
                  marginLeft: 10,
                  color: '#fff',
                  fontSize: 24,
                  fontFamily: 'sukhumvit-set',
                }}>{item.age}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Icon.Entypo
                  size={20}
                  name="location-pin"
                  color="#fff"
                  style={styles.iconButtons}
                />
                <Text style={{
                  marginLeft: 5,
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'sukhumvit-set',
                }}>ห่างออกไป 10 กม.</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{
                  color: '#fff',
                  fontSize: 16,
                  fontFamily: 'sukhumvit-set',
                }}>รายละเอียด</Text>
              </View>
            </View>
            {item.sex == 'F' ? <View style={{ position: 'absolute', bottom: 20, right: 20, }}>
              <Images width={width * 0.15} source={(require('../../assets/images/Icon_vip.png'))} />
            </View> : null}
          </ImageBackground>
        </TouchableOpacity>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          {item.like == 'N' ?
            <TouchableOpacity ref={(e) => this.like = e} onPress={() => { this.onLike(item) }}
              style={{
                height: 60, width: 60, backgroundColor: '#fff', borderRadius: 30, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5, alignItems: 'center', justifyContent: 'center'
              }}>
              <Icon.AntDesign
                size={30}
                name="heart"
                color="#999"
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity> :
            <TouchableOpacity ref={(e) => this.dislike = e} onPress={() => { this.onDisLike(item) }}
              style={{
                height: 60, width: 60, backgroundColor: '#fff', borderRadius: 30, shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5, alignItems: 'center', justifyContent: 'center'
              }}>
              <Icon.AntDesign
                size={30}
                name="heart"
                color="#FF0066"
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
          }

        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => this.carousel = c}
          data={this.state.user}
          renderItem={( item, index ) => this._renderItem(item, index)}
          sliderWidth={width}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
          loop={true}
          key={(item, index) => index.toString()}
        />
        {this.state.showAlbum && this.renderAlbum()}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
    backgroundColor: '#fff',
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
    color: '#778899',
    fontFamily: 'sukhumvit-set',
  },
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    flex: 1,
    width: ITEM_WIDTH,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-around' 
  },
  photo16: {
    height: Math.round(ITEM_WIDTH * 3 / 2.2),
    width: width * .85
  },
  photo: {
    height: Math.round(ITEM_WIDTH * 3 / 1.8),
    width: width * .85
  },
  photo1: {
    height: Math.round(ITEM_WIDTH * 3 / 2.1),
    width: width * .85
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
