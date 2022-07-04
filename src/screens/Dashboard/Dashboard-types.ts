import { RefObject } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IconButtonRef } from '../../components/IconButton/IconButton-types';
import { WeatherContextState, Weather } from '../../contexts/Weather/Weather-types';

import { AppRootStackParamList } from '../../utils/navigation/navigator-types';

export interface DashboardStyles {
  containerStyle: ViewStyle;
  contentStyle: ViewStyle;
  updateIconStyle: ViewStyle;
  topInfoWrapperStyle: ViewStyle;
  weatherTypeStyle: TextStyle;
  separatorStyle: ViewStyle;
  bottomInfoWrapperStyle: ViewStyle;
  flexDirectionRowStyle: ViewStyle;
  alignItemsCenterStyle: ViewStyle;
  fontBoldStyle: TextStyle;
}

interface StateConfig extends Pick<WeatherContextState, 'img' | 'iconName'> {
  weather?: Weather['weather'];
}

interface MethodsConfig {
  iconButtonRef: RefObject<IconButtonRef>;
  updateWeather: () => void;
  handlePress: () => void;
}

interface StylesConfig extends DashboardStyles {}

export interface DashboardConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface DashboardProps {
  navigation: NativeStackNavigationProp<AppRootStackParamList, 'WeatherForecast'>;
}
