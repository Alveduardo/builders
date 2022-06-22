import axios from "axios";
import { WEATHER } from "../utils/weather/weather-consts";

const api = axios.create({
    baseURL: WEATHER.BASE_URL,
    params: {
        appid: WEATHER.API_KEY
    }
})

export default api