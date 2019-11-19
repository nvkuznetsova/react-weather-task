import { put, takeLatest, all } from 'redux-saga/effects';

import {
  FORECAST_IS_LOADING,
  FORECAST_HAS_ERROR,
  FORECAST_LOADING_SUCCESS
} from '../actions/forecast-actions';
import { getCityWeatherForecast } from '../services/forecast-service';

function* fetchForecast(action) {
  try {
    const forecast = yield getCityWeatherForecast(action.payload).then(response => response.data);
    yield put({ type: FORECAST_LOADING_SUCCESS, payload: { forecast, isLoading: false } });
  } catch (error) {
    yield put({ type: FORECAST_HAS_ERROR, payload: { error, isLoading: false } });
  }
}

function* actionWatcher() {
  yield takeLatest(FORECAST_IS_LOADING, fetchForecast)
}

export function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
