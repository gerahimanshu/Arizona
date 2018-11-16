import React, {Component} from 'react'
import images from '../images/index'
import {StyleSheet, Image, ImageBackground} from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { registerFirebaseAuthChanged } from '../firebase/queries'

export default class Splash extends Component{

    componentWillMount(){
        registerFirebaseAuthChanged()
        .then(res => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
        })
        .catch(err => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
            });
            this.props.navigation.dispatch(resetAction);
        })
    }

    render(){
        return(
            <ImageBackground source={images.background} style={styles.container}>
                <Image source={images.logo}/>
            </ImageBackground>
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