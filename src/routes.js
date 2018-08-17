import React from 'react'
import { colors } from 'styles'
import Welcome from 'pages/welcome'
import Repositories from 'pages/repositories'
import Organizations from 'pages/organizations'
import HeaderRight from 'components/HeaderRight'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Welcome,
    User: {
      screen: createBottomTabNavigator(
        {
          Repositories,
          Organizations
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secondary
            }
          }
        }
      )
    }
  },
  {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: ({ navigation }) => {
      const nop = {
        title: '',
        headerRight: <HeaderRight navigation={navigation} />
      }

      if (navigation.state.routes) {
        switch (navigation.state.routes[navigation.state.index].routeName) {
          case 'Repositories':
            nop.title = 'Repositórios'
            break
          case 'Organizations':
            nop.title = 'Organizações'
            break
        }
      }

      return nop
    }
  }
)

export default createNavigator
