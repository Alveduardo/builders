import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';
import { TimeContextState } from '../../contexts/Time/Time-types';
import { AppRootStackParamList } from '../../utils/navigation/navigator-types';
import { Weather } from '../../utils/weather/weather-types';

interface StateConfig extends Pick<TimeContextState, 'img'> {
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

export interface WeatherForecastStyles {
  containerStyle: ViewStyle;
  contentStyle: ViewStyle;
  goBackIconStyle: ViewStyle;
  tempMaxMinStyle: ViewStyle;
  forecastLabelStyle: TextStyle;
  containerListStyle: ViewStyle;
  containerBottomStyle: ViewStyle;
  containerCardStyle: ViewStyle;
  containerTitleCardStyle: ViewStyle;
  borderRounded: ViewStyle;
  textAlignCenter: TextStyle;
}

export interface WeatherForecastProps {
  navigation: NativeStackNavigationProp<AppRootStackParamList>;
}
