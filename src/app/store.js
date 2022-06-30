import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

// import rootSaga from './rootSaga';
import servicesReducer from 'src/features/service/serviceSlice';
import serviceSaga from 'src/features/service/serviceSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {},
  middleware: [saga],
});

saga.run(serviceSaga);

export default store;
