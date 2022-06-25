import { getRandomInt } from '..';
import { Time } from '../../contexts/Time/Time-types';
import { imagesList } from './images-list';

export const getImage = (time: Time['period'] = 'day', isRain: boolean = false) => {
  const min: number = 1;
  const max: number = isRain ? 4 : 11;

  const hourType: string = time === 'day' ? 'd' : 'n';

  const path: string = hourType + getRandomInt(min, max);

  return imagesList[path];
};
