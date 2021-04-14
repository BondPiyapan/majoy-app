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
    ImageBackground,
    BackHandler
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import DatePicker from 'react-native-datepicker'
import { WebBrowser } from 'expo';
import Images from 'react-native-scalable-image';
import { ButtonGroup } from 'react-native-elements';
import * as Icon from '@expo/vector-icons'
const { height, width } = Dimensions.get('window')
export default class RegisterProfileScreen extends React.Component {
    static navigationOptions = {

    };

    constructor(props) {
        super(props);
        this.state = {
            showEnterName: 1,
            TextInputName: "",
            showBtnName: false,
            loading: true,
            showEnterDate: false,
            date: "D D / M M / Y Y Y Y",
            showBtnDate: false,
            btnMen: {
                backgroundColor: '#ccc',
            },
            btnWoman: {
                backgroundColor: '#ccc',
            },
            btnOther :{
                backgroundColor: '#ccc',
            },
            showBtnGender: false,
            TextInputEducate: "",
            showBtnEducate: false,

            img1: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img2: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img3: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img4: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img5: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img6: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img7: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img8: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            img9: 'https://www.img.in.th/images/1e18778ae30c0ef30cdccf2af7dcef37.png',
            showBtnPhoto: false
        }

    }

    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        return true;
    };

    onEnterTextLastname = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputName: TextInputValue, showBtnName: true });
        } else {
            this.setState({ TextInputName: TextInputValue, showBtnName: false });
        }
    }

    onEnterTextEducate = (TextInputValue) => {
        if (TextInputValue.trim() != 0) {
            this.setState({ TextInputEducate: TextInputValue, showBtnEducate: true });
        } else {
            this.setState({ TextInputEducate: TextInputValue, showBtnEducate: false });
        }
    }

    async getPermissionCamera() {
        const { status } = await Permissions.getAsync(Permissions.CAMERA);
        const { status2 } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            await Permissions.askAsync(Permissions.CAMERA);
            console.log('CAMERA for not enabled.');
        } else {
            console.log(status + 'CAMERA enabled');
        }
        if (status2 !== 'granted') {
            await Permissions.askAsync(Permissions.CAMERA_ROLL);
            console.log('CAMERA for not enabled.');
        } else {
            console.log(status + 'CAMERA enabled');
        }
    }

    _pickImage = async (item) => {
        this.getPermissionCamera()
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                quality: 0.2,
                base64: true
            });
            if (!result.cancelled) {

                if(item == 1){
                    this.setState({ img1: result.uri, showBtnPhoto: true });
                }else if(item == 2){
                    this.setState({ img2: result.uri });
                }else if(item == 3){
                    this.setState({ img3: result.uri });
                }else if(item == 4){
                    this.setState({ img4: result.uri });
                }else if(item == 5){
                    this.setState({ img5: result.uri });
                }else if(item == 6){
                    this.setState({ img6: result.uri });
                }else if(item == 7){
                    this.setState({ img7: result.uri });
                }else if(item == 8){
                    this.setState({ img8: result.uri });
                }else if(item == 9){
                    this.setState({ img9: result.uri });
                }
                
            }
            // console.log(result);
        } catch (E) {
            console.log(E);
        }
    }

    enterName() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={{ padding: 20, alignItems: 'flex-start' }}>
                    <Text style={styles.inputLabel3}>ชื่อเล่นของฉัน คือ</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder='ชื่อเล่น'
                        textAlign={'center'}
                        onChangeText={TextInputValue => this.onEnterTextLastname(TextInputValue)}
                        style={{ padding: -10, fontFamily: 'sukhumvit-set', justifyContent:'center', fontSize: 30,width: width*.7 }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                    />
                    <View style={{
                        borderBottomColor: '#CED7DE',
                        borderBottomWidth: 1,
                        width: width * .7
                    }} />
                    <Text style={styles.inputLabel2}>นี่คือสิ่งที่จะปรากฏบน MaJoy</Text>
                </View>
                <View style={styles.getStartedContainer}>
                    {this.state.showBtnName == false ?
                        <TouchableOpacity disabled={true} onPress={() => this.setState({ showEnterName: false })}
                            style={[styles.button, styles.buttonFacebook]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.setState({ showEnterName: 2 })}
                            style={[styles.button, styles.buttonMobile]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                    }



                </View>
            </View>
        )
    }

    enterDate() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={{ padding: 20, alignItems: 'flex-start' }}>
                    <Text style={styles.inputLabel3}>วันเกิดของฉัน คือ</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <DatePicker
                        ref={(ref) => this.datePickerRef = ref}
                        style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
                        // date={this.state.date}
                        mode="date"
                        placeholder={this.state.date}
                        format="DD/MM/YYYY"
                        maxDate={new Date(1900, 0, 1)}
                        maxDate={new Date(2040, 0, 1)}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }
                        }}
                        showIcon={false}
                        onDateChange={(date) => {
                            this.setState({ date: date, showBtnDate: true })
                        }}
                    />
                    <View style={{
                        borderBottomColor: '#CED7DE',
                        borderBottomWidth: 1,
                        width: width * .7
                    }} />
                    <Text style={styles.inputLabel2}>ผู้ใช้คนอื่นสารมารถเห็นอายุของคุณได้</Text>
                </View>
                <View style={styles.getStartedContainer}>
                    {this.state.showBtnDate == false ?
                        <TouchableOpacity disabled={true} onPress={() => this.setState({ showEnterName: false })}
                            style={[styles.button, styles.buttonFacebook]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.setState({ showEnterName: 3 })}
                            style={[styles.button, styles.buttonMobile]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                    }



                </View>
            </View>
        )
    }

    enterGender() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={{ padding: 20, alignItems: 'flex-start' }}>
                    <Text style={styles.inputLabel3}>ฉันเป็น</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ btnMen: { backgroundColor: '#FF99CC' }, btnWoman: { backgroundColor: '#ccc' }, btnOther: { backgroundColor: '#ccc' }, showBtnGender: true })}
                        style={[styles.button, this.state.btnMen]}>
                        <Text style={styles.buttonText}>ผู้ชาย</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ btnWoman: { backgroundColor: '#FF99CC' }, btnMen: { backgroundColor: '#ccc' }, btnOther: { backgroundColor: '#ccc' }, showBtnGender: true })}
                        style={[styles.button, this.state.btnWoman]}>
                        <Text style={styles.buttonText}>ผู้หญิง</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ btnOther: { backgroundColor: '#FF99CC' }, btnMen: { backgroundColor: '#ccc' }, btnWoman: { backgroundColor: '#ccc' }, showBtnGender: true })}
                        style={[styles.button, this.state.btnOther]}>
                        <Text style={styles.buttonText}>อื่นๆ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.getStartedContainer}>
                    {/* <Text style={styles.inputLabel2}>แสดงเพศของฉันบนโปรไฟล์</Text> */}
                    {this.state.showBtnGender == false ?
                        <TouchableOpacity disabled={true} 
                            style={[styles.button, styles.buttonFacebook]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProvisionScreen')}
                            style={[styles.button, styles.buttonMobile]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                    }



                </View>
            </View>
        )
    }

    enterEducate() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <View style={{ padding: 20, alignItems: 'flex-start' }}>
                    <Text style={styles.inputLabel3}>สถานศึกษาของฉัน คือ</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder='ชื่อสถานศึกษา'
                        onChangeText={TextInputValue => this.onEnterTextEducate(TextInputValue)}
                        style={{ padding: -10, fontFamily: 'sukhumvit-set', fontSize: 30, alignContent: 'flex-start' }}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={1}
                    />
                    <View style={{
                        borderBottomColor: '#CED7DE',
                        borderBottomWidth: 1,
                        width: width * .7
                    }} />
                    <Text style={styles.inputLabel2}>นี่คือสิ่งที่จะปรากฏบน MaJoy</Text>
                </View>
                <View style={styles.getStartedContainer}>
                    {this.state.showBtnEducate == false ?
                        <TouchableOpacity disabled={true} onPress={() => this.setState({ showEnterName: false })}
                            style={[styles.button, styles.buttonFacebook]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => this.setState({ showEnterName: 5 })}
                            style={[styles.button, styles.buttonMobile]}>
                            <Text style={styles.buttonText}>ต่อไป</Text>
                        </TouchableOpacity>
                    }



                </View>
            </View>
        )
    }

    enterPhoto() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={styles.inputLabel3}>เพิ่มรูปภาพ</Text>
                        <View style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img1 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(1)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img2 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(2)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img3 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(3)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img4 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(4)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img5 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(5)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img6 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(6)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img7 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(7)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img8 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(8)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                                <ImageBackground style={{
                                    height: 120,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginHorizontal: 10
                                }}
                                    source={{ uri: this.state.img9 }}
                                >
                                    <TouchableOpacity onPress={() => this._pickImage(9)}
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            right: -5,
                                            height: 30,
                                            width: 30,
                                            marginTop: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            backgroundColor: '#FF0066'
                                        }}>
                                        <Icon.Entypo
                                            size={15}
                                            name="camera"
                                            color="#fff"
                                            style={styles.iconButtons}
                                        />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        {this.state.showBtnPhoto == false ?
                            <TouchableOpacity disabled={true} onPress={() => this.setState({ showEnterName: false })}
                                style={[styles.button, styles.buttonFacebook]}>
                                <Text style={styles.buttonText}>เรียบร้อย</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.setState({ showEnterName: 5 })}
                                style={[styles.button, styles.buttonMobile]}>
                                <Text style={styles.buttonText}>เรียบร้อย</Text>
                            </TouchableOpacity>
                        }



                    </View>
                </ScrollView>

            </View>
        )
    }

    render() {
        if (this.state.showEnterName == 1) {
            return this.enterName()
        } else if (this.state.showEnterName == 2) {
            return this.enterGender()
        } 

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
        position: 'absolute',
        bottom: 50,
        right: 0,
        left: 0
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
        backgroundColor: '#ccc',
    },
    buttonMobile: {
        backgroundColor: '#FF99CC',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'sukhumvit-set',
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
        color: '#999',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'sukhumvit-set',
        marginTop: 10
    },
    inputLabel3: {
        color: '#000',
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        fontFamily: 'sukhumvit-set-bold',
    }
});