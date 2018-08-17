import styles from './styles'
import api from 'services/api'
import React, { Component } from 'react'
import RepositoryItem from './components/RepositoryItem'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  FlatList,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />
  }

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadRepositories()
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true })
    const username = await AsyncStorage.getItem('@Githuber:username')
    const res = await api.get(`/users/${username}/repos`)

    this.setState({
      data: res.data,
      loading: false,
      refreshing: false
    })
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
      keyExtractor={item => String(item.id)}
    />
  )

  renderListItem = ({ item }) => <RepositoryItem repository={item}/>

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
