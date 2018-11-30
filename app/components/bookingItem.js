import React from 'react'
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { widthScale, heightScale } from '../utils/utils'
import colors from '../utils/colors'
import images from '../images/index'
import moment from 'moment'

const formatBookingData = (item) => {
    const date = moment.unix(item.startTime).format('MMMM D, YYYY')
    const startTime = moment.unix(item.startTime).format('hh:mm a')
    const endTime = moment.unix(item.endTime).format('hh:mm a')
    let status = null;
    const currentTimeStamp = moment().unix()
    if(currentTimeStamp > item.startTime){
        status = 0
    }else if(currentTimeStamp >= item.startTime && currentTimeStamp <= item.endTime){
        status = 1
    }else{
        status = 2
    }

    return {
        title: item.title,
        date: date + ' | ' + startTime + ' - ' + endTime,
        status: status
    }
}

const BookingItem = (props) => {
    const {item} = props
    const bookingData = formatBookingData(item)
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{bookingData.title}</Text>
            <View style={styles.middleView}>
                <View style={styles.middleInnerView}>
                    <Image source={images.calendar}/>
                    <Text style={styles.dateText}>{bookingData.date}</Text>
                </View>
                <Image source={images.rightArrow}/>
            </View>
            {
                (bookingData.status == 0) ? 
                <Text style={{...styles.statusText, color: colors.yellow}}>COMPLETED</Text> : (
                    (bookingData.status == 1) ? 
                    <Text style={{...styles.statusText, color: colors.green}}>ACTIVE SESSION</Text>: 
                    <Text style={{...styles.statusText, color: colors.blue}}>UPCOMING</Text>
                ) 
            }
            <View style={styles.bottomBorder}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: widthScale(20),
        paddingTop: heightScale(10),
        backgroundColor: colors.white
    },
    titleText: {
        fontSize: widthScale(18),
        color: colors.darkBlue
    },
    middleView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: heightScale(5)
    },
    middleInnerView: {
        flexDirection: 'row'
    },
    dateText: {
        fontSize: widthScale(14),
        color: colors.grayDivider,
        alignSelf: 'center',
        marginLeft: widthScale(10)
    },
    statusText: {
        fontSize: widthScale(14),
        marginTop: heightScale(5)
    },
    bottomBorder: {
        height: heightScale(2),
        flex: 1,
        backgroundColor: colors.grayBackground,
        marginTop: heightScale(10)
    }
})

export default BookingItem