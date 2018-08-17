import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Welcome from 'pages/welcome'
import Repositories from 'pages/repositories'
import Organizations from 'pages/organizations'
import HeaderRight from 'components/HeaderRight'

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Welcome: { screen: Welcome },
    User: {
      screen: createBottomTabNavigator({
        Repositories: {
          screen: createStackNavigator(
            {
              Repositories
            },
            {
              navigationOptions: {
                headerRight: <HeaderRight/>
              }
            }
          )
        },
        Organizations: {
          screen: createStackNavigator({Organizations})
        },
      }),
      navigationOptions: {header: null}
    },
  },
  {
    initialRouteName: isLogged ? 'User' : 'Welcome'
  }
)

export default createNavigator
