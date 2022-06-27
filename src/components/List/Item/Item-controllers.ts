import { getDateFromString, getPeriod } from '../../../contexts/Time/Time-utils';
import { isIncludedWord } from '../../../utils';
import { getIconWeather } from '../../../utils/weather/weather-utils';
import { itemStyles } from './Item-styles';
import { ItemConfig, ItemProps } from './Item-types';

export const useItemConfig = ({ item }: Pick<ItemProps, 'item'>): ItemConfig => {
  const {
    defaultStyles: { containerStyle, iconStyle },
  } = itemStyles;

  const split = item.dt_txt?.split(' ');
  const hour = split[1]?.substring(0, 5);

  const period = getPeriod(getDateFromString(item.dt_txt));
  const isRain = item?.rain ? true : false;

  const iconName = getIconWeather(period, isRain, isIncludedWord(item.weather[0].description, 'limpo'));

  return {
    state: {
      hour,
      iconName,
    },
    styles: {
      containerStyle,
      iconStyle,
    },
  };
};
