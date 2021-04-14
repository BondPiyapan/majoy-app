import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { WebBrowser, Notifications } from 'expo';
const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import * as Icon from '@expo/vector-icons'
const mapStateToProps = state => {
  return {
    text: state.global,
    userLike: state.userLike,
    userMain: state.userMain
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upDateText: (text) => {
      dispatch({ type: 'EDIT_GLOBAL', payload: text })
    },
    setText: (text) => {
      dispatch({ type: 'GET_GLOBAL', payload: text })
    },
    onDelete: (array) => {
      dispatch({ type: 'DELETE_GLOBAL', payload: array })
    },
    editUserMain: (array) => {
      dispatch({ type: 'EDIT_USERMAIN', payload: array })
    }
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
 
    }
  }

  onDelete(item){
    var array = [...this.props.userLike]; // make a separate copy of the array
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      this.props.onDelete(array);
    }
  }



  renderItem(item) {

    return (
      
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <ImageBackground style={{ width: 100, height: 100 }} source={item.uri} borderRadius={50}>
          </ImageBackground>
          </View>
          <View style={{flexDirection: 'column', justifyContent:'center', marginLeft: 20}}>
          <Text style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'sukhumvit-set-bold',
            }}>{item.name} </Text>
            <Text style={{
              color: '#999',
              fontSize: 16,
              fontFamily: 'sukhumvit-set',
            }}>ห่างออกไป 10 กม.</Text>
            <Text style={{
              color: '#999',
              fontSize: 16,
              fontFamily: 'sukhumvit-set',
            }}>รายละเอียด</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onDelete(item)}
           style={{height:30, width:30, borderRadius: 15, backgroundColor:'#ccc', position:'absolute', right:10, alignItems:'center', justifyContent:'center'}}>
          <Icon.AntDesign
                  size={20}
                  name="close"
                  color="#fff"
                  style={styles.iconButtons}
                />
          </TouchableOpacity>
        </View>
      
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 15, marginBottom: 30 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              color: '#FF99CC',
              fontSize: 24,
              fontFamily: 'sukhumvit-set-bold',
            }}>Likes  </Text>
            <Text style={{
              color: '#FF99CC',
              fontSize: 24,
              fontFamily: 'sukhumvit-set-bold',
            }}>{this.props.userLike.length}</Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.props.userLike}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* <View style={{ flexDirection: 'column' }}>
          <View style={styles.getStartedContainer}>
            <TextInput
                style={{borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => {
                    this.props.upDateText(text);
                }}
                value={this.props.text}/>
          </View>
        </View> */}
      </View>
    );
  }


}
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);

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
});
