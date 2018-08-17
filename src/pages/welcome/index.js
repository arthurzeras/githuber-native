import styles from './styles'
import api from 'services/api'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func
    }).isRequired
  }

  state = {
    username: '',
    loading: false,
    errorMessage: null
  }

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`)
    return user
  }

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber:username', username)
  }

  signIn = async () => {
    const { username } = this.state

    if (!username) {
      return
    }

    this.setState({ loading: true })

    try {
      await this.checkUserExists(username)
      await this.saveUser(username)

      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'User'})
        ]
      })

      this.props.navigation.dispatch(resetAction)
    } catch (err) {
      this.setState({ loading: false, errorMessage: 'Usuário não existe' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar, informe o seu usuário do Github.
        </Text>

        {
          !!this.state.errorMessage
            && <Text style={styles.error}>{this.state.errorMessage}</Text>
        }

        <View style={styles.form}>
          <TextInput
            autoCorrect={false}
            style={styles.input}
            autoCapitalize="none"
            value={this.state.username}
            placeholder="Digite o seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            onChangeText={username => this.setState({ username })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {
              this.state.loading
                ? <ActivityIndicator size="small" color="#FFF" />
                : <Text style={styles.buttonText}>Prosseguir</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
