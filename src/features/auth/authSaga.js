import { call, put, takeLatest } from 'redux-saga/effects';
import authApi from 'src/apis/auth';
import { localStorageAuth } from 'src/utils/constants';
import { authActions } from './authSlice';

function* handleLogin(action) {
  try {
    const res = yield call(authApi.login, action.payload);
    const data = res.data;
    console.log(`[authSaga] handleLogin data -> ${JSON.stringify(data, null, 2)}`);
    const userProfile = data.user;

    localStorage.setItem(localStorageAuth.ACCESS_TOKEN, data.token);
    localStorage.setItem(localStorageAuth.USER_PROFILE, JSON.stringify(userProfile));
  } catch (error) {
    yield put(authActions.loginFailure(error.res.data.message));
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
}
