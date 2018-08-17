import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class HeaderRight extends Component {
  signOut = () => {
    // Logout
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    )
  }
}
