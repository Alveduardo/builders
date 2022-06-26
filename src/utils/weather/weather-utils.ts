import { Time } from '../../contexts/Time/Time-types';

export const getIconWeather = (
  period: Time['period'] = 'day',
  isRain: boolean = false,
  isClearSky: boolean = false,
) => {
  let iconName: string = '';

  if (!isClearSky || isRain) iconName += 'cloud-';

  if (period === 'day') iconName += 'sun';
  else iconName += 'moon';

  if (isRain) iconName += '-rain';

  return iconName;
};
