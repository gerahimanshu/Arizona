import React, {Component} from 'react'
import {ScrollView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {heightScale, widthScale} from '../../utils/utils'
import colors from '../../utils/colors'
import images from '../../images/index'
import CustomDialog from '../../components/dialog'
import moment from 'moment'
import {getTables} from '../../firebase/queries'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            datePickerDialogVisible: false,
            day: '',
            month: '',
            dayOfWeek: ''
        }
    }

    componentWillMount(){
        this.setState({
            day: moment(Date.now()).format('D'), 
            month: moment(Date.now()).format('MMMM'),
            dayOfWeek: moment(Date.now()).format('dddd')
        })
        getTables()
    }

    changeDialogVisibility = (visible) => {
        this.setState({datePickerDialogVisible: visible})
    }

    setSelectedDate = (date) => {
        this.setState({
            day: moment(date.timestamp).format('D'), 
            month: moment(date.timestamp).format('MMMM'),
            dayOfWeek: moment(date.timestamp).format('dddd')
        })
        this.changeDialogVisibility(false)
    }

    render(){
        return(
            <ScrollView styles={styles.container}>
                <Text style={styles.tablesText}>Tables</Text>
                <Text style={{
                    ...styles.dateText, 
                    color: colors.lightBlue, 
                    fontSize: widthScale(20),
                    marginTop: heightScale(3)
                }}>{this.state.month}</Text>
                <TouchableOpacity style={styles.dateView} onPress={() => this.changeDialogVisibility(true)}>
                    <Text style={{
                        ...styles.dateText, 
                        color: colors.darkBlue, 
                        fontSize: widthScale(16)
                    }}>{this.state.dayOfWeek + ', ' + this.state.day}</Text>
                    <Image source={images.downArrow} style={styles.downArrowImage}/> 
                </TouchableOpacity>
                <CustomDialog 
                    title='Select Date' 
                    visible={this.state.datePickerDialogVisible} 
                    changeDialogVisibility={this.changeDialogVisibility}
                    type='calendar'
                    setSelectedDate={this.setSelectedDate}
                    height='70%'
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tablesText: {
        marginTop: heightScale(20),
        fontSize: widthScale(24),
        marginLeft: widthScale(10),
        fontWeight: 'bold'
    },
    dateText: {
        marginLeft: widthScale(10)
    },
    dateView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    downArrowImage: {
        marginLeft: widthScale(3)
    }
})