import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'

const FavoriteItem = ({ favorite }) => (
  <View style={styles.container}>
    <Text>{favorite.name}</Text>
  </View>
)

export default FavoriteItem
