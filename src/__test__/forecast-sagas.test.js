import { runSaga } from 'redux-saga';

import {
  FORECAST_LOAD_START,
} from '../actions/forecast-action-types';
import { forecastLoadingSuccess, forecastHasError } from '../actions/forecast-actions';

import * as api from '../services/forecast-service';

import { fetchForecast } from '../sagas/forecast-sagas';

describe('Forecast Sagas', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should load weather forecast and handle it if success', async() => {
    const dispatchedActions = [];

    const fakeStore = {
      getState: () => ({ isLoading: true }),
      dispatch: action => dispatchedActions.push(action),
    };

    const mockData = { data: { weather: 'good' } };

    api.getCityWeatherForecast = jest.fn((id) => Promise.resolve(mockData));

    await runSaga(fakeStore, fetchForecast, {type: FORECAST_LOAD_START, payload: 123}).done;
    expect(api.getCityWeatherForecast.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(forecastLoadingSuccess(mockData.data));
  });

  it('should handle error it if load fail', async() => {
    const dispatchedActions = [];

    const fakeStore = {
      getState: () => ({ isLoading: true }),
      dispatch: action => dispatchedActions.push(action),
    };

    const mockError = { error: { message: 'error' } };

    api.getCityWeatherForecast = jest.fn((id) => Promise.reject(mockError));

    await runSaga(fakeStore, fetchForecast, {type: FORECAST_LOAD_START, payload: 123});
    expect(api.getCityWeatherForecast.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(forecastHasError(mockError));
  });
});