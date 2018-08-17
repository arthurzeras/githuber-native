import React from 'react'
import Welcome from 'pages/welcome'
import Repositories from 'pages/repositories'
import Organizations from 'pages/organizations'
import HeaderRight from 'components/HeaderRight'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Welcome,
    User: {
      screen: createBottomTabNavigator({Repositories, Organizations})
    }
  },
  {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: {
      title: '?',
      headerRight: <HeaderRight/>
    }
  }
)

export default createNavigator
