import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Button,
    Dimensions,
    AsyncStorage,
    Alert,
    ImageBackground
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { WebBrowser } from 'expo';


const { height, width } = Dimensions.get('window')
export default class OtpVerifyScreen extends React.Component {
    static navigationOptions = {

    };

    constructor(props) {
        super(props);

        this.state = {
            otp: '',
            mobile: ''
        };

        // userId = this.props.navigation.getParam('userId')

    }

    _onFinishCheckingCode1(isValid, code) {
        this.props.navigation.navigate('RegisterProfileScreen')
    }
  
    

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper2}>
                    <Text style={styles.inputLabel2}>กรุณากรอกรหัสความปลอดภัยที่คุณได้รับ</Text>
                    <CodeInput
                        ref="codeInputRef2"
                        // secureTextEntry
                        codeLength={6}
                        keyboardType="numeric"
                        activeColor='#000'
                        inactiveColor='#000'
                        autoFocus={true}
                        ignoreCase={true}
                        inputPosition='center'
                        size={50}
                        onFulfill={(isValid, code) => this._onFinishCheckingCode1(isValid, code)}
                        containerStyle={{ marginTop: 30 }}
                        codeInputStyle={{ borderWidth: 1.5 }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 10,
    },
    viewInput: {
        // alignItems: 'center',
        marginHorizontal: 10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    button: {
        height: 50,
        width: 300,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonFacebook: {
        backgroundColor: '#3b5998',
    },
    buttonMobile: {
        backgroundColor: '#FF99CC',
    },
    buttonText: {
        fontSize: 18,
        color: '#000'
    },



    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        color: 'red',
        fontSize: 16,
        fontWeight: '800',
        paddingVertical: 30
    },
    wrapper: {
        marginTop: 30
    },
    inputWrapper1: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: '#009C92'
    },
    inputWrapper2: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        // backgroundColor: '#E0F8F1'
    },
    inputWrapper3: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: '#2F0B3A'
    },
    inputLabel1: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800'
    },
    inputLabel2: {
        color: '#000',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'sukhumvit-set',
    },
    inputLabel3: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800',
        textAlign: 'center'
    }
});