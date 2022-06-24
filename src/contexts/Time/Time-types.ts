import { ImageSourcePropType } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import { WeatherType } from '../../utils/weather/weather-types';

export interface TimeContextPropsTypes {
  children: JSX.Element;
}

export interface TimeType {
  isRain: boolean;
  hourType: HourType;
}

export type HourType = 'day' | 'night';

export interface TimeContextState {
  data: WeatherType | null;
  time: TimeType | null;
  img: ImageSourcePropType | null;
  iconName: IconProps['name'] | null;
}

export interface TimeContextDataType {
  state: TimeContextState;
  requestLocation: any;
}
