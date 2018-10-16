import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../utils/colors';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.loginText}>
                    Login
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.grayBackground
    },
    loginText:{
        marginTop: 36,
        marginLeft: 33,
        fontSize: 48,
        fontFamily: 'sfuitextregular',
        color: colors.textBlack
    }
})