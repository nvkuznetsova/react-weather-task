import {
  FORECAST_IS_LOADING,
  FORECAST_HAS_ERROR,
  FORECAST_LOADING_SUCCESS
} from '../actions/forecast-actions';

const initState = {
  isLoading: false,
  error: {},
  weatherForecast: {
    coord: {},
    weather: [],
    main: {},
    visibility: 0,
    wind: {},
    sys:{},
    id: 0,
    name: '',
  },
}

export const forecastReducer = (state = initState, action) => {
  switch(action.type) {
    case FORECAST_IS_LOADING: 
      return {
        ...state,
        isLoading: true,
      }
    case FORECAST_HAS_ERROR: 
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      }
    case FORECAST_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        weatherForecast: action.payload.forecast,
      }
    default: return state;
  }
}