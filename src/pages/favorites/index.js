import styles from './styles'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Favorites extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="star" size={20} color={tintColor} />
  }

  render() {
    return <View/>
  }
}
