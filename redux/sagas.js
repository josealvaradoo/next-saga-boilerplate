import { all } from 'redux-saga/effects'
import example from './sagas/example'

export default function* () {
  return yield all([
    example(),
  ])
}
