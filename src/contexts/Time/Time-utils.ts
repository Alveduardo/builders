import { Period } from './Time-types';

export const getPeriod = (date?: Date): Period => {
  const hours = date?.getHours() || new Date().getHours();
  const isDay = hours >= 6 && hours < 18;

  return isDay ? 'day' : 'night';
};

export const getDateFromString = (txt: string) => {
  const split = txt.split(' ');

  const date = split[0].substring(0, 10).split('-');
  const hour = split[1].substring(0, 5).split(':');

  const yyyy = Number(date[0]);
  const mm = Number(date[1]);
  const dd = Number(date[2]);

  const h = Number(hour[0]);
  const m = Number(hour[1]);

  return new Date(yyyy, mm, dd, h, m);
};
