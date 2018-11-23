import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'
import {heightScale, widthScale} from '../utils/utils'
import CustomCalendar from './calendar'
import TimePicker from './timePicker'
import colors from '../utils/colors'

export default class CustomDialog extends Component{

    render(){
        const {visible, changeDialogVisibility, title, type, setSelectedDate, height} = this.props
        return(
            <Modal isVisible={visible} style={styles.modalView}>
                <View style={{...styles.dialogView, height: height}}>
                    <View style={{paddingTop: heightScale(8), paddingBottom: heightScale(8)}}>
                        <View style={styles.header}>
                            <View style={styles.titleView}>
                                <Text style={styles.titleText}>{title}</Text>
                            </View>
                            <TouchableOpacity style={styles.cancelView} onPress={() => changeDialogVisibility(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dividerView}></View>
                    </View>
                    <View style={styles.container}>
                        {
                            (type == 'calendar') ? 
                                <CustomCalendar setSelectedDate={setSelectedDate}/> : 
                            (type == 'timepicker') ? <TimePicker/> : <Text></Text>
                        }
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalView: {
        justifyContent: 'flex-end', 
        margin: 0,
    },
    dialogView: {
        backgroundColor: colors.white, 
        padding: 5,
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
    },
    titleView: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    cancelText:{
        fontSize: widthScale(15),
        alignSelf: 'center'
    },
    cancelView: {
        position: 'absolute', 
        left: 0
    },
    titleText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: widthScale(20),
    },
    dividerView: {
        height: heightScale(1), 
        backgroundColor: colors.grayDivider,
        marginTop: heightScale(8)
    }
})
