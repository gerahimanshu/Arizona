import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal'
import {heightScale, widthScale} from '../utils/utils'
import CustomCalendar from './calendar'
import colors from '../utils/colors'

export default class CustomDialog extends Component{

    render(){
        const {visible, changeDialogVisibility, title, type, setSelectedDate} = this.props
        return(
            <Modal isVisible={visible} style={styles.modalView}>
                <View style={styles.dialogView}>
                    <View style={{paddingTop: heightScale(8), paddingBottom: heightScale(8)}}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => changeDialogVisibility(false)}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.titleText}>{title}</Text>
                            </TouchableOpacity>
                            <View>
                                <Text></Text>
                            </View> 
                        </View>
                        <View style={styles.dividerView}></View>
                    </View>
                    <View style={styles.container}>
                        {
                            type == 'calendar' ? (
                                <CustomCalendar setSelectedDate={setSelectedDate}/>
                            ) : <Text></Text>
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
        margin: 0
    },
    dialogView: {
        flex: 1,
        backgroundColor: colors.white, 
        padding: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelText:{
        fontSize: widthScale(15)
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: widthScale(20)
    },
    dividerView: {
        height: heightScale(2), 
        backgroundColor: colors.grayDivider,
        marginTop: heightScale(8)
    }
})
