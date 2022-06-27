import { ImageSourcePropType } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import { Weather } from '../../utils/weather/weather-types';

export interface TimeContextProps {
  children: JSX.Element;
}

export type Period = 'day' | 'night';

export interface Time {
  period: Period;
  isRain: boolean;
}

export interface TimeContextState {
  data: Weather | null;
  time: Time | null;
  img: ImageSourcePropType | null;
  iconName: IconProps['name'] | null;
}

export interface TimeContextData {
  state: TimeContextState;
  requestLocation: () => void;
}
