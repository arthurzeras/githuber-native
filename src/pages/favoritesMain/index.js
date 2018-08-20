import styles from './styles'
import { colors } from 'styles'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

export default class FavoritesMain extends Component {
  static navigationOptions = {
    headerRight: null,
    headerTintColor: colors.white,
    title: 'Repositórios Favoritos',
    headerStyle: { backgroundColor: colors.secondary }
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  }

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content"/>

        <View style={styles.content}>
          <Text style={styles.description}>
            Marque os seus repositórios favoritos
          </Text>
          <View style={styles.form}>
            <TextInput
              autoCorrect={false}
              style={styles.input}
              autoCapitalize="none"
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(255, 255, 255, .4)"
            />

            <TouchableOpacity
              onPress={() => {}}
              style={styles.inputButton}
              activityOpacity={0.6}
            >
              <Text style={styles.buttonText}>
                <Icon name="plus" size={20} color="#fff"/>
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus favoritos (3)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
