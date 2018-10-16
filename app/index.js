import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Splash from './layouts/splash';
import Login from './layouts/login';

export default class Application extends Component{
    render(){
        return(
            <Login/>
        )
    }
}