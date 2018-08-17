import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeaderRight extends Component {
  signOut = () => {
    // Logout
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}
