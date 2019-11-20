import { connect } from 'react-redux';

import { WidgetPage } from '../components/WidgetPage';
import { forecastIsLoading } from '../actions/forecast-actions';

const mapStateToProps = (state) => ({
  isLoading: state.forecastReducer.isLoading,
  error: state.forecastReducer.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherForecast: (cityId) => dispatch(forecastIsLoading(cityId)),
  };
};

export const ForecastContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetPage);