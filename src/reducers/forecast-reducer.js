import {
  FORECAST_LOAD_START,
  FORECAST_LOAD_SUCCESS,
  FORECAST_LOAD_ERROR,
} from '../actions/forecast-action-types';

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
    case FORECAST_LOAD_START: 
      return {
        ...state,
        isLoading: true,
      }
    case FORECAST_LOAD_ERROR: 
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    case FORECAST_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weatherForecast: action.payload.forecast,
      }
    default: return state;
  }
}