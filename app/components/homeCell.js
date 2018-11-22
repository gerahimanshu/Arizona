import React from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import images from '../images/index'

const getImageForIndex = (index) => {
    if(index == 0){
        return images.homeCells.img1
    }else if(index == 1){
        return images.homeCells.img2
    }else if(index == 2){
        return images.homeCells.img3
    }else if(index == 3){
        return images.homeCells.img4
    }else{
        if(index % 4 == 0){
            return images.homeCells.img1
        }else if(index % 4 == 1){
            return images.homeCells.img2
        }else if(index % 4 == 2){
            return images.homeCells.img3
        }else{
            return images.homeCells.img4
        }
    }
}

const HomeCell = (props) => {
    const {index} = props
    const image = getImageForIndex(index)
    return (
        <ImageBackground source={image}>
            <View>
                <Text></Text>
                <View>
                    <Text></Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

})

export default HomeCell
