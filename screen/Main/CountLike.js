import React from 'react';
import { Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import * as Icon from '@expo/vector-icons'

const mapStateToProps = state => {
    return {
        text: state.global,
        userLike: state.userLike
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        upDateText: (text) => {
            dispatch({type: 'EDIT_GLOBAL', payload: text})
        }
    }
  }

class CountLike extends React.Component {
  constructor(props) {
      super(props)

    // anything you need in the constructor
  }


  render() {
    return (
        
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Icon.AntDesign
          name='heart'
          size={26}
          style={{ marginBottom: -3, alignItems: 'center', justifyContent: 'center' }}
          color={this.props.focused ? '#FF99CC' : '#ccc'}
        />
        <Text style={{
          marginLeft: 5,
          color: this.props.focused ? '#FF99CC' : '#ccc',
          fontSize: 16,
          fontFamily: 'sukhumvit-set',
        }}>{this.props.userLike.length}</Text>
      </View>
    );
}

}

export default connect(mapStateToProps, mapDispatchToProps)(CountLike);