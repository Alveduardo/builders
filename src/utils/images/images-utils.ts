import { getRandomInt } from '..';
import { Time } from '../../contexts/Time/Time-types';
import { imagesList } from './images-list';

export const getImage = (time: Time['period'] = 'day', isRain: boolean = false) => {
  const min: number = 1;
  const max: number = isRain ? 4 : 8;

  let period: string = time === 'day' ? 'd' : 'n';

  if (isRain) period += 'r';

  const path: string = period + getRandomInt(min, max);

  return imagesList[path];
};
