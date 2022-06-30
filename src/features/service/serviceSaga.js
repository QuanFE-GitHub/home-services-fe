import { call, put, takeEvery } from 'redux-saga/effects';

function* workGetServicesFetch() {
  yield console.log('abc');
}

function* serviceSaga() {
  yield takeEvery('services/getServicesFetch', workGetServicesFetch);
}

export default serviceSaga;
