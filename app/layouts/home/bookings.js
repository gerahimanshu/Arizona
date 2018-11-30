import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import {heightScale, widthScale} from '../../utils/utils'
import colors from '../../utils/colors'
import {getBookings} from '../../firebase/queries'
import BookingItem from '../../components/bookingItem'

export default class Bookings extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading: false,
            bookings: []
        }
    }

    componentWillMount(){
        this.setState({loading: true})
        getBookings()
        .then(res => {
            if(res && res.length){
                this.setState({bookings: res})
            }
            this.setState({loading: false})
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View elevation={5} style={styles.bookingsView}>
                    <Text style={styles.bookingsText}>Bookings</Text>
                </View>
                <FlatList
                    data={this.state.bookings}
                    renderItem={({item, index}) => <BookingItem item={item}/>}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}/>
                {
                    this.state.loading &&
                    <View style={styles.loader}>
                        <ActivityIndicator animating={true} size='large'/>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bookingsText: {
        fontSize: widthScale(24),
        marginLeft: widthScale(10),
        marginTop: heightScale(10),
        fontWeight: 'bold'
    },
    bookingsView: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingHorizontal: widthScale(10),
        paddingVertical: heightScale(10),
        shadowColor: colors.grayDivider,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 1.0
    },
    list: {
        marginTop: heightScale(3)
    },
    loader: {
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})  