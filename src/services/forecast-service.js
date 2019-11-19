import axios from 'axios';
const URL = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'APPID=5a2327c90b03e35bed8c8d4cd614ef74';

// cityIds: Spb - 498817, Msk - 524901, Rostov - 501175

export const getCityWeatherForecast = (cityId) => {
  return axios.get(`${URL}?id=${cityId}&${apiKey}&units=metric`, {
    headers: { 'Content-Type': 'application/json' }
  })
}
