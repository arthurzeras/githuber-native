import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Welcome from 'pages/welcome'
import Repositories from 'pages/repositories'
import Organizations from 'pages/organizations'

const createNavigator = (isLogged = false) => createStackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: createBottomTabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations }
    })
  },
}, {initialRouteName: isLogged ? 'User' : 'Welcome'})

export default createNavigator
