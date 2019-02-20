import { takeLatest, call, put } from 'redux-saga/effects';
import { 
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  signupUser,
  signupUserSuccess,
  signupUserFailure
} from '../actionCreators';
import { AuthApi } from '../../services';
import { notify } from 'react-notify-toast';
import Cookies from 'js-cookie';


export function* watchLoginSaga() {
  yield takeLatest(loginUser().type, loginUsersaga);
};

function* loginUsersaga(action) {
  try {
    const response = yield call(AuthApi.loginUser, action.payload);
    yield put(loginUserSuccess(response.data));
    const { message, token } = response.data;
    Cookies.set('jwt-token', token)
    notify.show(message, "success", 1500);
    action.history.push('/');
  } catch (err) {
    const { error } = err.response.data;
    yield put(loginUserFailure(error));
    notify.show(error, "error", 1500);
  };
};


export function* watchSignupSaga() {
  yield takeLatest(signupUser().type, signupUserSaga);
}

function* signupUserSaga(action) {
  try {
    const response = yield call(AuthApi.signupUser, action.payload);
    yield put(signupUserSuccess(response.data));
    const { message, token } = response.data;
    Cookies.set('jwt-token', token)
    notify.show(message, "success", 1500);
    action.history.push('/');
  } catch (err) {
    const { error } = err.response.data;
    yield put(signupUserFailure(error));
    notify.show(error, "error", 1500);
  }
}