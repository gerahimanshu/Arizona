import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import colors from '../utils/colors'

const Entry = (props) => {
    const {name, marginTop, onEmailChange, onPasswordChange} = props;
    if(marginTop){
        //passwordCase..
        return (
            <View style={{...styles.container, marginTop: marginTop}}>
                <Text style={styles.text}>{name}</Text>
                <TextInput 
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(text) => onPasswordChange(text)}/>
                <View style={styles.divider}></View>
            </View>
        )
    }else{
        //emailCase..
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <TextInput 
                    style={styles.textInput}
                    textContentType="emailAddress"
                    onChangeText={(text) => onEmailChange(text)}/>
                <View style={styles.divider}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 20,
        marginRight: 20
    },
    text:{
        color: colors.textBlack,
        fontSize: 16
    },
    divider:{
        height: 1,
        backgroundColor: colors.grayDivider
    },
    textInput:{
        color: colors.blue
    }
})

export default Entry;