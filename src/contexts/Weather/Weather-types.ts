import { ImageSourcePropType } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

export interface WeatherData {
  weather: {
    main: {
      pressure: number;
      humidity: number;
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
    };
    name: string;
    weather: [
      {
        description: string;
      },
    ];
    wind: {
      speed: number;
    };
    visibility: number;
    sys: {
      sunrise: number;
      sunset: number;
    };
  };
  forecast: any;
}

export type Period = 'day' | 'night';

export interface Location {
  latitude?: number;
  longitude?: number;
}

export interface WeatherContextProps {
  children: JSX.Element;
}

export interface Weather {
  period: Period;
  isRain: boolean;
}

export interface WeatherContextState {
  data: WeatherData | null;
  time: Weather | null;
  img: ImageSourcePropType | null;
  iconName: IconProps['name'] | null;
}

export interface WeatherContextData {
  state: WeatherContextState;
  requestLocation: () => void;
}
