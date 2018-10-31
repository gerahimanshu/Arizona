import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'
import colors from '../utils/colors'
import images from '../images/index'
import strings from '../utils/strings'
import CustomTextInput from '../components/customTextInput'

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (emailText) => {
        this.setState({email: emailText})
    }

    onPasswordChange = (passwordText) => {
        this.setState({password: passwordText})
    }

    onLogin = () => {
        //TODO: Perform login task..
    }

    render(){
        return(
            <ImageBackground source={images.background} style={styles.container}>
                <Image source={images.logo}/>
                <View style={styles.emailView}>
                    <CustomTextInput type='email'/>
                </View>
                <View style={styles.passwordView}>
                    <CustomTextInput type='password' />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>{strings.forgotPassword}</Text>
                </TouchableOpacity>
                <View style={styles.loginOuterView}>
                    <TouchableOpacity style={styles.loginButton}> 
                        <Text>{strings.loginButton}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailView: {
        width: '100%', 
        marginTop: 100
    },
    passwordView: {
        width: '100%', 
        marginTop: 20
    },
    forgotPasswordText: {
        color: colors.white,
        fontSize: 14,
        marginTop: 20
    },
    loginOuterView: {
        width: '100%'
    },
    loginText: {
        color: colors.textBlack,
        fontSize: 20,
        fontWeight: 'bold'
    },
    loginButton: {
        borderRadius: 20,
        backgroundColor: colors.white,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 15
    }
})