import styles from './styles'
import React, { Component } from 'react'
import { StackActions, NavigationActions } from 'react-navigation'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  }

  signIn = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'User'})
      ]
    })

    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar, informe o seu usuário do Github.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
