import styles from './styles'
import { colors } from 'styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as FavoritesActions from 'store/actions/favorites'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

class FavoritesMain extends Component {
  static navigationOptions = {
    headerRight: null,
    headerTintColor: colors.white,
    title: 'Repositórios Favoritos',
    headerStyle: { backgroundColor: colors.secondary }
  }

  static propTypes = {
    favoritesCount: PropTypes.number.isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired
  }

  state = {
    favoriteInput: ''
  }

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites')
  }

  addFavorite = () => {
    if (!this.state.favoriteInput.length) {
      return false
    } else {
      this.props.addFavoriteRequest(this.state.favoriteInput)
    }
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
              value={this.state.favoriteInput}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(255, 255, 255, .4)"
              onChangeText={value => this.setState({favoriteInput: value})}
            />

            <TouchableOpacity
              activityOpacity={0.6}
              style={styles.inputButton}
              onPress={this.addFavorite}
            >
              <Text style={styles.buttonText}>
                <Icon name="plus" size={20} color="#fff"/>
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus favoritos ({ this.props.favoritesCount })</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({favoritesCount: state.favorites.length})
const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesMain)
