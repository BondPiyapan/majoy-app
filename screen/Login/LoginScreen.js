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
  ImageBackground,
  BackHandler
} from 'react-native';
import ModalPickerImage from './ModalPickerImage';
import PhoneInput from 'react-native-phone-input';
const { height, width } = Dimensions.get('window')



export default class LoginScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      hasName: null,
      loading: true,
      mobile: '',
      device_token: '',
      pickerData: null,
    }

    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    this.onSubmitMobile = this.onSubmitMobile.bind(this);

    this.mobileRef = this.updateRef.bind(this, 'mobile');
  }

  onPressFlag() {
    this.myCountryPicker.open();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.iso2);
  }

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }
    this.setState({ errors });
  }

  onChangeText(text) {
    ['mobile']
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
        this.setState({ [name]: text });
      });
  }

  onSubmitMobile() {
    this.mobile.focus();
  }

  onSubmit() {
    let errors = {};

    ['mobile']
      .forEach((name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Should not be empty';
        } else {
          if ('password' === name && value.length < 6) {
            errors[name] = 'Too short';
          }
        }
      });

    this.setState({ errors });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  loginHandle(){
    this.props.navigation.navigate('OtpVerifyScreen')
  }


  render() {
    let { mobile } = this.state;

    let { errors = {}, ...data } = this.state;

    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> */}

        {/* <View style={styles.viewInput}>
                        <TextField
                        ref={this.mobileRef}
                        // value={data.mobile}
                        keyboardType='numeric'
                        autoCorrect={false}
                        enablesReturnKeyAutomatically={true}
                        onFocus={this.onFocus}
                        onChangeText={mobile => this.setState({ mobile })}
                        onSubmitEditing={this.onSubmitMobile}
                        returnKeyType='next'
                        label='Mobile'
                        error={errors.mobile}
                        />
                    </View> */}

        <View style={styles.numberInput}>
          <PhoneInput
            ref={(ref) => {
              this.phone = ref;
            }}
            initialCountry='th'
            onPressFlag={this.onPressFlag}
            flagStyle={{
              width: 60, height: 40, borderWidth: 0
            }}
            textStyle={{
              fontFamily: 'sukhumvit-set', fontSize: 16, color: '#000'
            }}
            textProps={{
              placeholder: 'กรุณากรอกหมายเลขโทรศัพท์', borderWidth: 1, borderRadius: 5, borderColor: '#000', height: 50, paddingHorizontal: 10
            }}
            autoFormat={true}
            onChangePhoneNumber={value => this.setState({ mobile: value })}
          />

          {/* <ModalPickerImage
            ref={(ref) => {
              this.myCountryPicker = ref;
            }}
            data={this.state.pickerData}
            onChange={(country) => {
              this.selectCountry(country);
            }}
            cancelText="Cancel"
          /> */}
        </View>

        <View style={styles.textInput}>
          <Text style={styles.viewText}>กรุณากรอกหมายเลขโทรศัพท์ของคุณ</Text>
          <Text style={styles.viewText}>ระบบจะทำการส่งรหัสยืนยันไปยังหมายเลขโทรศัพท์ของคุณ</Text>
        </View>

        <View style={styles.getStartedContainer}>
          <TouchableOpacity onPress={() => this.loginHandle()}
            style={[styles.button, styles.buttonMobile]}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
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
  buttonFacebook: {
    backgroundColor: '#3b5998',
  },
  buttonMobile: {
    backgroundColor: '#FF99CC',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
  viewText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'sukhumvit-set',
    textAlign: 'center'
  },
  numberInput: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});