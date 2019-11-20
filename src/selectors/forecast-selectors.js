import { createSelector } from 'reselect';

const getWeather = (state) => state.forecastReducer.weatherForecast.weather;
const getTemperature = (state) => state.forecastReducer.weatherForecast.main.temp;
const getName = (state) => state.forecastReducer.weatherForecast.name;
const getMainWeatherProperties = (state) => state.forecastReducer.weatherForecast.main;
const getWind = (state) => state.forecastReducer.weatherForecast.wind;

export const widgetHeaderDataSelector = createSelector(
  getWeather,
  getTemperature,
  getName,
  (weather, temp, name) => {
    const weatherDescription = {...weather[0]};
    return Object.assign({}, weatherDescription, { temp, name } );
  }
);

export const widgetBodyDataSelector = createSelector(
  getMainWeatherProperties,
  getWind,
  (mainProps, wind) => {
    const deg = '\u00B0';
    return [
      {
        title: "temperature",
        value: mainProps.temp,
        mark: `${deg}C`,
      },
      {
        title: "pressure",
        value: mainProps.pressure,
        mark: 'hpa',
      },
      {
        title: "humidity",
        value: mainProps.humidity,
        mark: '%',
      },
      {
        title: "minimal temperature",
        value: mainProps.temp_min,
        mark: `${deg}C`,
      },
      {
        title: "maximum temperature",
        value: mainProps.temp_max,
        mark: `${deg}C`,
      },
      {
        title: "wind",
        value: wind.speed ,
        mark: 'm/h',
      }
    ];
  }
);
