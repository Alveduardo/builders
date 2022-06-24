import { TimeType } from '../../contexts/Time/Time-types';

export const getIconWeather = (
  time: TimeType['hourType'] = 'day',
  isRain: boolean = false,
  isClear: boolean = false
) => {
  let iconName: string = '';

  if (!isClear)
    iconName += 'cloud-'

  if (time === 'day') iconName += 'sun';
  else iconName += 'moon';

  if (isRain) iconName += '-rain';

  return iconName;
};
