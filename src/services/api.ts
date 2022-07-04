import axios from 'axios';
import { WEATHER } from '../contexts/Weather/Weather-consts';

const api = axios.create({
  baseURL: WEATHER.API.BASE_URL,
  params: {
    appid: WEATHER.API.KEY,
  },
});

export default api;
