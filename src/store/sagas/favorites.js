import api from 'services/api'
import { call, put, select } from 'redux-saga/effects'
import { addFavoriteSuccess, addFavoriteError } from 'store/actions/favorites'

export function* addFavoriteRequest(action) {
  try {
    const res = yield call(api.get, `/repos/${action.payload.repoName}`)
    const favorites = yield select(state => state.favorites.data)
    if (favorites.find(favorite => favorite.id === res.data.id)) {
      yield put(addFavoriteError('O repositório já foi adicionado aos favoritos'))
    } else {
      yield put(addFavoriteSuccess(res.data))
    }
  } catch (err) {
    yield put(addFavoriteError('Houve um problema ao tentar buscar o repositório, tente novamente'))
  }
}
