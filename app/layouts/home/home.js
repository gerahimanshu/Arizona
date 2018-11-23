import React, {Component} from 'react'
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import {heightScale, widthScale} from '../../utils/utils'
import colors from '../../utils/colors'
import images from '../../images/index'
import CustomDialog from '../../components/dialog'
import moment from 'moment'
import {getTables} from '../../firebase/queries'
import HomeCell from '../../components/homeCell'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            datePickerDialogVisible: false,
            timePickerDialogVisible: false,
            day: '',
            month: '',
            dayOfWeek: '',
            tables: []
        }
    }

    componentWillMount(){
        this.setState({
            day: moment(Date.now()).format('D'), 
            month: moment(Date.now()).format('MMMM'),
            dayOfWeek: moment(Date.now()).format('dddd')
        })
        getTables()
        .then(res => {
            if(res && res.length){
                this.setState({tables: res})
            }
        })
        .catch(err => {

        })
    }

    changeDialogVisibility = (visible, type) => {
        if(type && type == 'calendar'){
            this.setState({datePickerDialogVisible: visible})
            this.setState({timePickerDialogVisible: !visible})
        }else if(type && type == 'timepicker'){
            this.setState({timePickerDialogVisible: !visible})
            this.setState({datePickerDialogVisible: visible})
        }else{
            this.setState({timePickerDialogVisible: visible})
            this.setState({datePickerDialogVisible: visible})
        }
    }

    setSelectedDate = (date) => {
        this.setState({
            day: moment(date.timestamp).format('D'), 
            month: moment(date.timestamp).format('MMMM'),
            dayOfWeek: moment(date.timestamp).format('dddd')
        })
        this.changeDialogVisibility(false, 'timepicker')
    }

    setSelectedTime = (fromTime, toTime) => {
        console.warn(fromTime, toTime)
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
                <TouchableOpacity style={styles.dateView} onPress={() => this.changeDialogVisibility(true, 'calendar')}>
                    <Text style={{
                        ...styles.dateText, 
                        color: colors.darkBlue, 
                        fontSize: widthScale(16)
                    }}>{this.state.dayOfWeek + ', ' + this.state.day}</Text>
                    <Image source={images.downArrow} style={styles.downArrowImage}/> 
                </TouchableOpacity>
                <View style={styles.tablesView}>
                    <FlatList
                        data={this.state.tables}
                        renderItem={({item, index}) => <HomeCell index={index} title={item.title} status={item.status}/>}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        style={{flex: 1}}
                    />
                </View>
                {
                    this.state.datePickerDialogVisible && 
                    <CustomDialog 
                        title='Select Date' 
                        visible={this.state.datePickerDialogVisible} 
                        changeDialogVisibility={this.changeDialogVisibility}
                        type='calendar'
                        setSelectedDate={this.setSelectedDate}
                        height='70%'
                    />
                }
                {
                    this.state.timePickerDialogVisible &&
                    <CustomDialog 
                        title='Select Time' 
                        visible={this.state.timePickerDialogVisible} 
                        changeDialogVisibility={this.changeDialogVisibility}
                        type='timepicker'
                        setSelectedTime={this.setSelectedTime}
                        height='50%'
                    />
                }
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
    },
    tablesView: {
        flex: 1,
        marginTop: heightScale(10)
    }
})