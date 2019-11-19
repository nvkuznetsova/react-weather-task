export const FORECAST_IS_LOADING = 'FORECAST_IS_LOADING';
export const FORECAST_HAS_ERROR = 'FORECAST_HAS_ERROR';
export const FORECAST_LOADING_SUCCESS = 'FORECAST_LOADING_SUCCESS';

export const forecastIsLoading = (cityId) => {
  return { type: FORECAST_IS_LOADING, payload: cityId, }
}

export const forecastHasError = (error, isLoading) => {
  return {
    type: FORECAST_HAS_ERROR,
    payload: {
      error,
      isLoading,
    },
  }
}

export const forecastLoadingSuccess = (forecast, isLoading) => {
  return {
    type: FORECAST_LOADING_SUCCESS,
    payload: {
      forecast,
      isLoading,
    }
  }
}
