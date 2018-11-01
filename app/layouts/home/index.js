import React, { Component } from 'react'
import {Image} from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation-performance'
import { TabNavigator } from 'react-navigation' 
import images from '../../images/index'
import Home from './home'
import Bookings from './bookings'
import Profile from './profile'


class HomeLayout extends Component {
  render() {
    return (
      <TabLayout/>
    )
  }
}

const TabLayout = TabNavigator({
  Home: { screen: Home },
  Bookings: { screen: Bookings },
  Profile: { screen: Profile }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      tabs: {
        Home: {
          icon: <Image source={images.navigation.home.homeUnselected} />,
          activeIcon: <Image source={images.navigation.home.homeSelected} />
        },
        Bookings: {
          icon: <Image source={images.navigation.bookings.bookingsUnselected} />,
          activeIcon: <Image source={images.navigation.bookings.bookingsSelected}/>
        },
        Profile: {
          icon: <Image source={images.navigation.profile.profileUnselected} />,
          activeIcon: <Image source={images.navigation.profile.profileSelected} />
        }
      }
    }
  }
})

export default HomeLayout