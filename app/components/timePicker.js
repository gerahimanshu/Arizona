import React, {Component} from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { heightScale, widthScale } from '../utils/utils'
import colors from '../utils/colors'
import images from '../images/index'

class TimePicker extends Component {

    constructor(props){
        super(props)
        this.state = {
            from: {
                hour: '',
                minute: '',
                am_pm: ''
            },
            to: {
                hour: '',
                minute: '',
                am_pm: ''
            }
        }
    }

    getCurrentTime = () => {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        if(hours > 12){
            this.setState({
                from: {
                    hour: hours-12, 
                    minute: minutes, 
                    am_pm: 'PM'
                }, 
                to: {
                    hour: hours-12+1, 
                    minute: minutes, 
                    am_pm: 'PM'
                }
            })
        }else{
            this.setState({
                from: {
                    hour: hours, 
                    minute: minutes, 
                    am_pm: 'AM'
                },
                to: {
                    hour: hours+1, 
                    minute: minutes, 
                    am_pm: 'AM'
                }
            })
        }
    }

    increaseFromHourCount = () => {
        if(this.state.from.hour < 12){
            this.setState({
                from: {
                    hour: this.state.from.hour + 1,
                    minute: this.state.from.minute,
                    am_pm: this.state.from.am_pm
                }
            })
        }
    }

    increaseToHourCount = () => {
        if(this.state.to.hour < 12){
            this.setState({
                to: {
                    hour: this.state.to.hour + 1,
                    minute: this.state.to.minute,
                    am_pm: this.state.to.am_pm
                }
            })
        }
    }

    decreaseFromHourCount = () => {
        if(this.state.from.hour > 1){
            this.setState({
                from: {
                    hour: this.state.from.hour - 1,
                    minute: this.state.from.minute,
                    am_pm: this.state.from.am_pm
                }
            })
        }
    }

    decreaseToHourCount = () => {
        if(this.state.to.hour > 1){
            this.setState({
                to: {
                    hour: this.state.to.hour - 1,
                    minute: this.state.to.minute,
                    am_pm: this.state.to.am_pm
                }
            })
        }
    }

    increaseFromMinuteCount = () => {
        if(this.state.from.minute < 59){
            this.setState({
                from: {
                    hour: this.state.from.hour,
                    minute: this.state.from.minute + 1,
                    am_pm: this.state.from.am_pm
                }
            })
        }
    }

    increaseToMinuteCount = () => {
        if(this.state.to.minute < 59){
            this.setState({
                to: {
                    hour: this.state.to.hour,
                    minute: this.state.to.minute + 1,
                    am_pm: this.state.to.am_pm
                }
            })
        }
    }

    decreaseFromMinuteCount = () => {
        if(this.state.from.minute > 0){
            this.setState({
                from: {
                    hour: this.state.from.hour,
                    minute: this.state.from.minute - 1,
                    am_pm: this.state.from.am_pm
                }
            })
        }
    }

    decreaseToMinuteCount = () => {
        if(this.state.to.minute > 0){
            this.setState({
                to: {
                    hour: this.state.to.hour,
                    minute: this.state.to.minute - 1,
                    am_pm: this.state.to.am_pm
                }
            })
        }
    }

    changeFromAmPm = () => {
        this.setState({
            from: {
                hour: this.state.from.hour,
                minute: this.state.from.minute,
                am_pm: this.state.from.am_pm == 'PM' ? 'AM' : 'PM'
            }
        })
    }

    changeToAmPm = () => {
        this.setState({
            to: {
                hour: this.state.to.hour,
                minute: this.state.to.minute,
                am_pm: this.state.to.am_pm == 'PM' ? 'AM' : 'PM'
            }
        })
    }

    onApplyPress = () => {
        this.props.setSelectedTime(this.state.from, this.state.to)
    }

    componentWillMount(){
        this.getCurrentTime()
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.innerView}>
                    <Text style={styles.fromToText}>From</Text>
                    <View style={styles.digitView}>
                        <TouchableOpacity onPress={() => this.increaseFromHourCount()}>
                            <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                        <Text style={styles.digitText}>
                            {(this.state.from.hour.toString().length == 1) ? '0'+this.state.from.hour : this.state.from.hour}
                        </Text>
                        <TouchableOpacity onPress={() => this.decreaseFromHourCount()}>
                            <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.fromToText}>:</Text>
                    <View style={styles.digitView}>
                        <TouchableOpacity onPress={() => this.increaseFromMinuteCount()}>
                            <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                        <Text style={styles.digitText}>
                            {(this.state.from.minute.toString().length == 1) ? '0'+this.state.from.minute : this.state.from.minute}
                        </Text>
                        <TouchableOpacity onPress={() => this.decreaseFromMinuteCount()}>
                            <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.colonView}>
                        <TouchableOpacity onPress={() => this.changeFromAmPm()}>
                            <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                        <Text style={styles.fromToText}>{this.state.from.am_pm}</Text>
                        <TouchableOpacity onPress={() => this.changeFromAmPm()}>
                            <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.innerView}>
                    <Text style={styles.fromToText}>{"   To  "}</Text>
                    <View style={styles.digitView}>
                        <TouchableOpacity onPress={() => this.increaseToHourCount()}>
                            <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                        <Text style={styles.digitText}>
                            {(this.state.to.hour.toString().length == 1) ? '0'+this.state.to.hour : this.state.to.hour}
                        </Text>
                        <TouchableOpacity onPress={() => this.decreaseToHourCount()}>
                            <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                    </View> 
                    <Text style={styles.fromToText}>:</Text>
                    <View style={styles.digitView}>
                        <TouchableOpacity onPress={() => this.increaseToMinuteCount()}>
                            <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                        <Text style={styles.digitText}>
                            {(this.state.to.minute.toString().length == 1) ? '0'+this.state.to.minute : this.state.to.minute}
                        </Text>
                        <TouchableOpacity onPress={() => this.decreaseToMinuteCount()}>
                            <Image source={images.downArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.colonView}>
                        <TouchableOpacity onPress={() => this.changeToAmPm()}>
                            <Image source={images.upArrowFilled} style={styles.arrowStyle} />
                        </TouchableOpacity>
                        <Text style={styles.fromToText}>{this.state.to.am_pm}</Text>
                        <TouchableOpacity onPress={() => this.changeToAmPm()}>
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
    colonView: {
        justifyContent: 'space-between', padding: widthScale(5)
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