import React from 'react'
import {Image, StyleSheet} from 'react-native'

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
        height: 18,
        width: 18
    }
})

export default NavigationIcon