import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';
import { TimeContextState } from '../../contexts/Time/Time-types';
import { AppRootStackParamList } from '../../utils/navigation/navigator-types';
import { Weather } from '../../utils/weather/weather-types';

interface StateConfig extends Pick<TimeContextState, 'img' | 'iconName'> {
  isLoading: boolean;
  weather?: Weather['weather'];
}

interface MethodsConfig {
  updateWeather: () => void;
  handlePress: () => void;
}

type StylesConfig = DashboardStyles;

export interface DashboardConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

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

export interface DashboardProps {
  navigation: NativeStackNavigationProp<AppRootStackParamList, 'WeatherForecast'>;
}
