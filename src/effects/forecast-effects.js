import { put, takeLatest, all } from 'redux-saga/effects';

import {
  FORECAST_LOAD_START,
} from '../actions/forecast-action-types';
import { forecastLoadingSuccess, forecastHasError } from '../actions/forecast-actions';

import { getCityWeatherForecast } from '../services/forecast-service';

function* fetchForecast(action) {
  try {
    const forecast = yield getCityWeatherForecast(action.payload).then(response => response.data);
    yield put(forecastLoadingSuccess(forecast, false));
  } catch (error) {
    yield put(forecastHasError(error, false));
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
