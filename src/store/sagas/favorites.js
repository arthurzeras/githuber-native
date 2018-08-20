import api from 'services/api'
import { call, put } from 'redux-saga/effects'
import { addFavoriteSuccess, addFavoriteError } from 'store/actions/favorites'

export function* addFavoriteRequest(action) {
  try {
    const res = yield call(api.get, `/repos/${action.payload.repoName}`)
    yield put(addFavoriteSuccess(res.data))
  } catch (err) {
    yield put(addFavoriteError('Houve um problema ao tentar buscar o repositório, tente novamente'))
  }
}
