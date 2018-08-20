import React from 'react'
import { colors } from 'styles'
import { View } from 'react-native'

const Favorites = () => <View/>

Favorites.navigationOptions = {
  headerRight: null,
  headerTintColor: colors.white,
  title: 'Repositórios Favoritos',
  headerStyle: { backgroundColor: colors.secondary }
}

export default Favorites
