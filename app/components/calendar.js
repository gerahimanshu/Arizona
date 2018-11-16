import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Calendar} from 'react-native-calendars'
import colors from '../utils/colors'
import {widthScale} from '../utils/utils'

export default class CustomCalendar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedDate: ''
        }
    }

    onApplyPress = () => {
        if(this.state.selectedDate == ''){
            alert('Select Date')
        }else{
            this.props.setSelectedDate(this.state.selectedDate)
        }
    }

    render(){
        return (
            <View style={{backgroundColor: 'red',height:'50%'}}>
                <Calendar
                    onDayPress={(day) => {this.setState({selectedDate: day})}}
                    monthFormat={'MMMM yyyy'}
                    firstDay={1}
                    markedDates={{
                        [this.state.selectedDate.year + 
                            '-' + 
                            this.state.selectedDate.month + 
                            '-' + 
                            this.state.selectedDate.day]: {
                                selected: true, 
                                selectedColor: colors.lightBlue
                            }
                    }}
                />
                <TouchableOpacity style={styles.applyButtonView} onPress={() => this.onApplyPress()}>
                    <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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