import React, {Component} from 'react'
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    ImageBackground, 
    Image, 
    ActivityIndicator
} from 'react-native'
import colors from '../utils/colors'
import images from '../images/index'
import strings from '../utils/strings'
import CustomTextInput from '../components/customTextInput'
import {checkForLogin, loginAnonymously} from '../firebase/queries'
import {heightScale, widthScale} from '../utils/utils'
import { StackActions, NavigationActions } from 'react-navigation'

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    onEmailChange = (emailText) => {
        this.setState({email: emailText})
    }

    onPasswordChange = (passwordText) => {
        this.setState({password: passwordText})
    }

    onLogin = () => {
        
        if(this.state.email == ''){
            alert('Enter Email')
            return 
        }

        if(this.state.password == ''){
            alert('Enter Password')
            return
        }
        
        this.setState({loading: true})
        checkForLogin(this.state.email, this.state.password)
        .then(res => {
            return loginAnonymously()
        })
        .then(user => {
            this.setState({loading: false})
            if(user){
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
        })
        .catch(error => {
            this.setState({loading: false})
            alert(error.message)
        })
    }

    render(){
        return(
            <ImageBackground source={images.background} style={styles.container}>
                <Image source={images.logo}/>
                <View style={styles.emailView}>
                    <CustomTextInput type='email' onEmailChange={this.onEmailChange}/>
                </View>
                <View style={styles.passwordView}>
                    <CustomTextInput type='password' onPasswordChange={this.onPasswordChange}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>{strings.forgotPassword}</Text>
                </TouchableOpacity>
                <View style={styles.loginOuterView}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.onLogin()}> 
                        <Text>{strings.loginButton}</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.loading && (
                        <View style={styles.loader}>
                            <ActivityIndicator animating={true} size='large'/>
                        </View>
                    )
                    
                }
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
        marginTop: heightScale(50)
    },
    passwordView: {
        width: '100%', 
        marginTop: heightScale(10)
    },
    forgotPasswordText: {
        color: colors.white,
        fontSize: 14,
        marginTop: heightScale(10)
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
        marginLeft: widthScale(10),
        marginRight: widthScale(10),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: heightScale(10),
        padding: 15
    },
    loader: {
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})