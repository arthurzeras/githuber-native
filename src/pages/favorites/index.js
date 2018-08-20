import styles from './styles'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

export default class Favorites extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="star" size={20} color={tintColor} />
  }

  render() {
    return (
      <View style={styles.container}>
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
    )
  }
}
