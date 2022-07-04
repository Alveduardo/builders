import { useContext } from 'react';
import { WeatherContext, WeatherProvider } from './Weather-context';

export const useWeather = () => {
  const context = useContext(WeatherContext);
  return context;
};

export { WeatherProvider };
