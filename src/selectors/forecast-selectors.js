import { createSelector } from 'reselect';

const getWeather = (state) => state.forecastReducer.weatherForecast.weather;
const getTemperature = (state) => state.forecastReducer.weatherForecast.main.temp;
const getName = (state) => state.forecastReducer.weatherForecast.name;
const getMainWeatherProperties = (state) => state.forecastReducer.weatherForecast.main;
const getWind = (state) => state.forecastReducer.weatherForecast.wind;

const createProperty = (title, value, mark) => ({title, value, mark})

export const widgetHeaderDataSelector = createSelector(
  getWeather,
  getTemperature,
  getName,
  (weather, temp, name) => {
    const weatherDescription = weather[0];
    return { ...weatherDescription, temp, name, };
  }
);

export const widgetBodyDataSelector = createSelector(
  getMainWeatherProperties,
  getWind,
  (mainProps, wind) => {
    const deg = '\u00B0';
    const titles = ['temperature', 'pressure', 'humidity', 'minimal temperature', 'maximum temperature', 'wind'];
    const weatherProperties = { ...mainProps, ...{ wind: wind.speed } };
    return Object.keys(weatherProperties).reduce((propsArr, curr, i) => {
      const mark = curr.includes('temp') ? `${deg}C` : 
                   curr === 'humidity' ? '%' :
                   curr === 'pressure' ? 'hpa' : 'm/s';
      return [...propsArr, createProperty(titles[i], weatherProperties[curr], mark)];
    }, []);
  }
);
