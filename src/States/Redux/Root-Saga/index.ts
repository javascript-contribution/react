import { all, call } from 'typed-redux-saga/macro';
import { userSagas } from '../Users/user.saga';

export function* rootSaga() {
  yield* all([call(userSagas)]);
}