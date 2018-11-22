import React from 'react'
import {View, StyleSheet, ImageBackground, Text, Image} from 'react-native'
import images from '../images/index'
import {widthScale, heightScale} from '../utils/utils'
import colors from '../utils/colors'

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
    const {index, title, status} = props
    const image = getImageForIndex(index)
    return (
        <View>
            <Image style={styles.imageThumbnail} source={image} />
            <View style={styles.innerView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{...styles.statusText, backgroundColor: status ? colors.bookedOrange : colors.availableGreen}}>{status ? 'Booked' : 'Available'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    innerView: {
        position: 'absolute', 
        bottom: heightScale(40), 
        alignSelf: 'center'
    },
    statusView: {
        padding: widthScale(10),
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: widthScale(12),
        color: colors.white, 
        alignSelf: 'center'
    },
    statusText: {
        fontSize: widthScale(14),
        color: colors.white,
        padding: widthScale(10), 
        borderRadius: widthScale(20)
    }
})

export default HomeCell
