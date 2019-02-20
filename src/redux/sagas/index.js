import { all } from 'redux-saga/effects'
import { watchLoginSaga, watchSignupSaga } from './authSaga';
import { watchFetchNotes, watchFetchNote } from './noteSaga';

function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchSignupSaga(),
    watchFetchNotes(),
    watchFetchNote(),
  ]);
};

export default rootSaga;
