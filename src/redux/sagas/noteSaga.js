import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getNotes,
  getNotesSuccess,
  getNotesFailure,
  getNote,
  getNoteSuccess,
  getNoteFailure
} from '../actionCreators/noteActions';
import { NoteApi } from '../../services';
import { notify } from 'react-notify-toast';

export function* watchFetchNotes() {
  yield takeLatest(getNotes().type, fetchNotesSaga);
}

function* fetchNotesSaga(action) {
  try {
    const response = yield call(NoteApi.getNotes);
    yield put(getNotesSuccess(response.data.notes));
  } catch (err) {
    const { error } = err.response.data;
    yield put(getNotesFailure(error));
    notify.show(error, "error", 1500);
  }
}

export function* watchFetchNote() {
  yield takeLatest(getNote().type, fetchNoteSaga);
}

function* fetchNoteSaga(action) {
  try {
    const response = yield call(NoteApi.getNote, action.payload);
    yield put(getNoteSuccess(response.data.note));
  } catch (err) {
    const { error } = err.response.data;
    yield put(getNoteFailure(error))
    notify.show(error, "error", 1500);
  }
}