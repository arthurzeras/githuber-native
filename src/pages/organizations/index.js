import styles from './styles'
import api from 'services/api'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  FlatList,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />
  }

  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    this.loadOrganizations()
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username')
    const res = await api.get(`/users/${username}/orgs`)

    this.setState({
      data: res.data,
      loading: false
    })
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  )

  renderListItem = ({ item }) => <Text>{ item.login }</Text>

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator style={styles.loading}/>
            : this.renderList()
        }
      </View>
    )
  }
}
