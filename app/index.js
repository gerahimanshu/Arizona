import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Splash from './layouts/splash';
import Login from './layouts/login';
import HomeLayout from './layouts/home/index';

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
    },
    Home: {
        screen: HomeLayout
    }
}, {
    headerMode: 'none'
})

