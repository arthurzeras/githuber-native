import React from 'react'
import { colors } from 'styles'
import Welcome from 'pages/welcome'
import Favorites from 'pages/favorites'
import Repositories from 'pages/repositories'
import Organizations from 'pages/organizations'
import HeaderRight from 'components/HeaderRight'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Welcome,
    Favorites,
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
      const navop = {
        title: '',
        headerRight: <HeaderRight navigation={navigation} />
      }

      if (navigation.state.routes) {
        switch (navigation.state.routes[navigation.state.index].routeName) {
          case 'Repositories':
            navop.title = 'Repositórios'
            break
          case 'Organizations':
            navop.title = 'Organizações'
            break
        }
      }

      return navop
    }
  }
)

export default createNavigator
