import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Dialog, { SlideAnimation } from 'react-native-popup-dialog'
import {heightScale, widthScale} from '../utils/utils'

export default class DatePickerDialog extends Component{

    render(){
        const {visible, changeDialogVisibility} = this.props
        return(
            <Dialog
                visible={visible}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogTitle={
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => changeDialogVisibility(false)}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.titleText}>Select Date</Text>
                        </TouchableOpacity>
                        <View>
                            <Text></Text>
                        </View> 
                    </View>
                }
                dialogStyle={{padding: heightScale(3)}}
                containerStyle={{ justifyContent: 'flex-end' }}
                height={0.5}
                width={1}
            >
                <View style={styles.container}>
                    <Text>kjsdbvs</Text>
                </View>
            </Dialog>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
})
