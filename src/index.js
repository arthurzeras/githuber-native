import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import createNavigator from './routes'
import { Provider } from 'react-redux'
import store from 'store'


export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  }

  async componentDidMount() {
    // AsyncStorage.clear()

    const username = await AsyncStorage.getItem('@Githuber:username')
    this.appLoaded(username)
  }

  appLoaded = username => {
    this.setState({
      userChecked: true,
      userLogged: !!username
    })
  }

  render() {
    if (!this.state.userChecked) {
      return null
    }

    const Routes = createNavigator(this.state.userLogged)
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}
