import { TextStyle, ViewStyle } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppRootStackParamList } from '../../utils/navigation/navigator-types';
import { WeatherContextState, Weather } from '../../contexts/Weather/Weather-types';

export interface WeatherForecastStyles {
  containerStyle: ViewStyle;
  containerContentStyle: ViewStyle;
  goBackIconStyle: ViewStyle;
  tempMaxMinStyle: ViewStyle;
  containerListStyle: ViewStyle;
  containerBottomStyle: ViewStyle;
  containerCardStyle: ViewStyle;
  containerTitleCardStyle: ViewStyle;
  sunriseContentStyle: ViewStyle;
  marginRightSmall: ViewStyle;
  marginRightRegular: ViewStyle;
  marginBottomDisplay: ViewStyle;
  textAlignCenter: TextStyle;
}

interface StateConfig extends Pick<WeatherContextState, 'img'> {
  weather: Weather['weather'];
  forecast: Weather['forecast'];
}

interface MethodsConfig {
  goBack: () => void;
}

interface StylesConfig extends WeatherForecastStyles {
  feelsLikeTitleStyle: TextStyle;
}

export interface WeatherForecastConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface WeatherForecastProps {
  navigation: NativeStackNavigationProp<AppRootStackParamList>;
}
