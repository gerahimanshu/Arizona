import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from './layouts/splash';
import Login from './layouts/login';

export default class Application extends Component{
    render(){
        return(
            <Route/>
        )
    }
}

const Route = createStackNavigator({
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login
    }
}, {
    headerMode: 'none'
})

