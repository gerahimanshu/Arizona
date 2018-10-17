import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';
import strings from '../utils/strings';
import Entry from '../components/entry'

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
            <View style={styles.container}>
                <Text style={styles.loginText}>
                    {strings.login}
                </Text>
                <View>
                    <View style={styles.centerViewContainer}>
                        <Entry 
                            name={strings.email}  
                            onEmailChange={this.onEmailChange}/>
                        <Entry 
                            name={strings.password} 
                            marginTop={40} 
                            onPasswordChange={this.onPasswordChange}/>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {this.onLogin()}}>
                        <Text style={styles.buttonText}>{strings.loginButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        backgroundColor: colors.grayBackground
    },
    loginText:{
        marginTop: 36,
        marginLeft: 33,
        fontSize: 48,
        fontFamily: 'sfuitextregular',
        color: colors.textBlack
    },
    centerViewContainer:{
        backgroundColor: colors.white,
        marginLeft: 32,
        marginRight: 32,
        marginTop: 80,
        borderRadius: 10,
        paddingTop: 40,
        paddingBottom: 60
    },
    button:{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: colors.blue,
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -25
    },
    buttonText:{
        color: colors.white,
        fontSize: 18
    }
})