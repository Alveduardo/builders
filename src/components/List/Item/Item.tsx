import React, { memo } from 'react';
import { View } from 'react-native';
import IconButton from '../../IconButton';
import Label from '../../Label';
import TempIndicator from '../../TempIndicator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-vector-icons/Icon';
import { getIconWeather } from '../../../utils/weather/weather-utils';
import { areEqualListProps, isIncludedWord } from '../../../utils';
import { getDateFromString, getPeriod } from '../../../contexts/Time/Time-utils';

export interface ItemT {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  rain?: {};
}

export interface ItemProps {
  item: ItemT;
  index: number;
}

const Item = memo(({ item, index }: ItemProps): JSX.Element => {
  const split = item.dt_txt.split(' ');
  const hour = split[1].substring(0, 5);

  const period = getPeriod(getDateFromString(item.dt_txt));
  const isRain = item?.rain ? true : false;

  const iconName = getIconWeather(period, isRain, isIncludedWord(item.weather[0].description, 'limpo'));

  return (
    <View
      style={{
        paddingHorizontal: 32,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
      }}
    >
      <Label size='xSmall' style={{}}>
        {hour}
      </Label>
      <IconButton type={FontAwesome5 as typeof Icon} name={iconName} style={{ flex: 1 }} size={'xxxSmall'} disabled />
      <TempIndicator min={Math.round(item.main.temp_min)} max={Math.round(item.main.temp_max)} />
    </View>
  );
}, areEqualListProps);

export default Item;
