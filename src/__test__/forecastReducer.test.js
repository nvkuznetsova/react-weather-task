import {
  FORECAST_LOAD_START,
  FORECAST_LOAD_SUCCESS,
  FORECAST_LOAD_ERROR,
} from '../actions/forecast-action-types';

import { forecastReducer } from '../reducers/forecast-reducer';

describe('ForecastReducer', () => {
  it('should return new state on FORECAST_LOAD_START', () => {
    const initState = {
      isLoading: false,
      error: {},
      weatherForecast: {},
    }

    const action = {type: FORECAST_LOAD_START};
    expect(forecastReducer(initState, action)).toEqual({
      ...initState,
      isLoading: true,
    });
  });

  it('should return new state on FORECAST_LOAD_SUCCESS', () => {
    const prevState = {
      isLoading: true,
      error: {},
      weatherForecast: {},
    }

    const newState = {
      ...prevState,
      isLoading: false,
      weatherForecast: { weather: 'good'},
    };

    const action = { type: FORECAST_LOAD_SUCCESS, payload: { forecast: { weather: 'good'}}};
    expect(forecastReducer(prevState, action)).toEqual(newState);
  });

  it('should return new state on FORECAST_LOAD_ERROR', () => {
    const prevState = {
      isLoading: true,
      error: {},
      weatherForecast: {},
    }

    const newState = {
      ...prevState,
      isLoading: false,
      error: { message: 'error'},
    };

    const action = { type: FORECAST_LOAD_ERROR, payload: { error: { message: 'error'}}};
    expect(forecastReducer(prevState, action)).toEqual(newState);
  });

  it('should return propper state on FORECAST_LOAD_START after error', () => {
    const errorState = {
      isLoading: false,
      error: { message: 'error' },
      weatherForecast: {},
    }

    const action = { type: FORECAST_LOAD_START };
    expect(forecastReducer(errorState, action)).toEqual({
      ...errorState,
      isLoading: true,
      error: {},
    });
  });
});