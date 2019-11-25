import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { forecastReducer } from '../reducers/forecast-reducer';
import { rootSaga } from '../sagas/forecast-sagas';

export const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ forecastReducer });

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
  ));

sagaMiddleware.run(rootSaga);