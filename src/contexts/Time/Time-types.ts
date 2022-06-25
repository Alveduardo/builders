import { ImageSourcePropType } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import { Weather } from '../../utils/weather/weather-types';

export interface TimeContextPropsTypes {
  children: JSX.Element;
}

export interface Time {
  isRain: boolean;
  period: Period;
}

export type Period = 'day' | 'night';

export interface TimeContextState {
  data: Weather | null;
  time: Time | null;
  img: ImageSourcePropType | null;
  iconName: IconProps['name'] | null;
}

export interface TimeContextData {
  state: TimeContextState;
  requestLocation: any;
}
