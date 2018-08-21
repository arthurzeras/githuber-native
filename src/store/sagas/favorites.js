import api from 'services/api'
import { call, put, select } from 'redux-saga/effects'
import { Creators as FavoritesCreators } from 'store/ducks/favorites'

export function* addFavoriteRequest(action) {
  try {
    const res = yield call(api.get, `/repos/${action.payload.repoName}`)
    const favorites = yield select(state => state.favorites.data)
    if (favorites.find(favorite => favorite.id === res.data.id)) {
      yield put(FavoritesCreators.addFavoriteError('O repositório já foi adicionado aos favoritos'))
    } else {
      yield put(FavoritesCreators.addFavoriteSuccess(res.data))
    }
  } catch (err) {
    yield put(FavoritesCreators.addFavoriteError('Houve um problema ao tentar buscar o repositório, tente novamente'))
  }
}
