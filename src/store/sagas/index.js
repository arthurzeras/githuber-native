import { addFavoriteRequest } from './favorites'
import { all, takeLatest } from 'redux-saga/effects'

export default function* rootSaga() {
  return yield all([
    takeLatest('ADD_FAVORITE_REQUEST', addFavoriteRequest)
  ])
}
