import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {height, width} from '../utils/utils'

const NavigationIcon = (props) => {
    return (
        <Image 
            source={props.img}
            style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        height: height(18),
        width: width(18)
    }
})

export default NavigationIcon