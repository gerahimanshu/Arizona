import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { heightScale, widthScale } from '../utils/utils'
import colors from '../utils/colors'
import images from '../images/index'

const TimePicker = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Text style={styles.fromToText}>From</Text>
                <View style={styles.digitView}>
                    <TouchableOpacity>
                        <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.digitText}>07</Text>
                    <TouchableOpacity>
                        <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.fromToText}>:</Text>
                <View style={styles.digitView}>
                    <TouchableOpacity>
                        <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.digitText}>07</Text>
                    <TouchableOpacity>
                        <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'space-between', padding: widthScale(5)}}>
                    <TouchableOpacity>
                        <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.fromToText}>PM</Text>
                    <TouchableOpacity>
                        <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.innerView}>
                <Text style={styles.fromToText}>{"   To  "}</Text>
                <View style={styles.digitView}>
                    <TouchableOpacity>
                        <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.digitText}>07</Text>
                    <TouchableOpacity>
                        <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.fromToText}>:</Text>
                <View style={styles.digitView}>
                    <TouchableOpacity>
                        <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.digitText}>07</Text>
                    <TouchableOpacity>
                        <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'space-between', padding: widthScale(5)}}>
                    <TouchableOpacity>
                        <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                    <Text style={styles.fromToText}>PM</Text>
                    <TouchableOpacity>
                        <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.applyButtonView} onPress={() => this.onApplyPress()}>
                <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    innerView: {
        flexDirection: 'row',
        marginTop: heightScale(10),
        alignSelf: 'center'
    },
    digitView: {
        marginLeft: widthScale(5),
        padding: widthScale(5),
        backgroundColor: colors.blackBackground,
        borderRadius: 5
    },
    digitText: {
        fontSize: widthScale(36),
        color: colors.white
    },
    fromToText: {
        alignSelf: 'center',
        fontSize: widthScale(18),
        color: colors.blackBackground,
        fontWeight: 'bold',
        marginLeft: widthScale(5)
    },
    arrowStyle: {
        alignSelf: 'center'
    },
    applyButtonView: {
        backgroundColor: colors.lightBlue,
        marginLeft: widthScale(10),
        marginRight: widthScale(10),
        alignItems: 'center',
        padding: widthScale(10),
        borderRadius: 20
    },
    applyText: {
        color: colors.white,
        fontSize: 20
    }
})

export default TimePicker