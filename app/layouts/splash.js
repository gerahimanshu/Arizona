import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Splash extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 30, fontFamily: 'sfuitextregular'}}>
                    Arizona Academy
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})