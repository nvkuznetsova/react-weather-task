import {
  FORECAST_LOAD_START,
  FORECAST_LOAD_SUCCESS,
  FORECAST_LOAD_ERROR,
} from './forecast-action-types';

export const forecastIsLoading = (cityId) => {
  return { type: FORECAST_LOAD_START, payload: cityId, }
}

export const forecastHasError = (error) => {
  return {
    type: FORECAST_LOAD_ERROR,
    payload: {
      error,
    },
  }
}

export const forecastLoadingSuccess = (forecast) => {
  return {
    type: FORECAST_LOAD_SUCCESS,
    payload: {
      forecast,
    }
  }
}
