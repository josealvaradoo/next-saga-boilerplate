import { all } from 'redux-saga/effects'
import example from './sagas/example'

export default function* sagas() {
  return yield all([
    example(),
  ])
}
