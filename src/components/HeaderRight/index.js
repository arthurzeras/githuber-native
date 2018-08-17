import styles from './styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, AsyncStorage } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

export default class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired
  }

  signOut = async () => {
    await AsyncStorage.removeItem('@Githuber:username')

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Welcome'})
      ]
    })

    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}
