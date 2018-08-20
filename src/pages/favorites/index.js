import styles from './styles'
import { colors } from 'styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import RepositoryItem from '../repositories/components/RepositoryItem'

class Favorites extends Component {
  static navigationOptions = {
    headerRight: null,
    headerTintColor: colors.white,
    title: 'Repositórios Favoritos',
    headerStyle: { backgroundColor: colors.secondary }
  }

  static propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number
    })).isRequired
  }

  renderList = () => (
    <FlatList
      data={this.props.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <RepositoryItem repository={item}/>}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        {
          !this.props.favorites.length
            ? <Text style={styles.empty}>Nenhum favorito cadastrado</Text>
            : this.renderList()
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites)
