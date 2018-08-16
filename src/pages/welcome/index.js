import React from 'react'
import styles from './styles'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const Welcome = () => (
  <View style={styles.container}>
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

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
)
export default Welcome
