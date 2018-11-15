import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {heightScale, widthScale} from '../../utils/utils'
import colors from '../../utils/colors'
import images from '../../images/index'
import DatePickerDialog from '../../components/datePickerDialog'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            datePickerDialogVisible: false
        }
    }

    changeDialogVisibility = (visible) => {
        this.setState({datePickerDialogVisible: visible})
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
                }}>Month</Text>
                <TouchableOpacity style={styles.dateView} onPress={() => this.changeDialogVisibility(true)}>
                    <Text style={{
                        ...styles.dateText, 
                        color: colors.darkBlue, 
                        fontSize: widthScale(16)
                    }}>Day, Date</Text>
                    <Image source={images.downArrow} style={styles.downArrowImage}/> 
                </TouchableOpacity>
                <DatePickerDialog visible={this.state.datePickerDialogVisible} changeDialogVisibility={this.changeDialogVisibility}/>
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