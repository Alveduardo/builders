import { useContext } from 'react';
import { WeatherContext, WeatherProvider } from './Weather-context';

export const useWeather = () => {
  const context = useContext(WeatherContext);
  return context;
};

export { WeatherProvider };
export * from './Weather-types';
export * from './Weather-utils';
export * from './Weather-consts';
