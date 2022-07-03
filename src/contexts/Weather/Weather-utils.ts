import { Period } from './Weather-types';

export const getPeriod = (date?: Date): Period => {
  const hours = date?.getHours() || new Date().getHours();
  const isDay = hours >= 6 && hours < 18;

  return isDay ? 'day' : 'night';
};

export const getIconWeather = (period: Period = 'day', isRain: boolean = false, isClearSky: boolean = false) => {
  let iconName: string = '';

  if (!isClearSky || isRain) iconName += 'cloud-';

  if (period === 'day') iconName += 'sun';
  else iconName += 'moon';

  if (isRain) iconName += '-rain';

  return iconName;
};
