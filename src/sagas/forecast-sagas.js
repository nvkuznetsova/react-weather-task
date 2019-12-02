import { put, takeLatest, all } from 'redux-saga/effects';

import {
  FORECAST_LOAD_START,
} from '../actions/forecast-action-types';
import { forecastLoadingSuccess, forecastHasError } from '../actions/forecast-actions';

import { getCityWeatherForecast } from '../services/forecast-service';

export function* fetchForecast(action) {
  try {
    const { data: forecast } = yield getCityWeatherForecast(action.payload);
    yield put(forecastLoadingSuccess(forecast));
  } catch (error) {
    yield put(forecastHasError(error));
  }
}

function* actionWatcher() {
  yield takeLatest(FORECAST_LOAD_START, fetchForecast)
}

export function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
