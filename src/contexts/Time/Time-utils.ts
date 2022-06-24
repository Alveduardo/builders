import { HourType } from './Time-types';

export const getHourType = (): HourType => {
  const hours = new Date().getHours();
  const isDay = hours >= 6 && hours < 18;

  return isDay ? 'day' : 'night';
};
