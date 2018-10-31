import React, {Component} from 'react'
import images from '../images/index'
import {StyleSheet, Image, ImageBackground} from 'react-native'

export default class Splash extends Component{

    componentWillMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 3000)
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