import { TextStyle, ViewStyle } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WeatherContextState, WeatherData } from '../../contexts/Weather';
import { AppRootStackParamList } from '../../utils/navigation/navigator-types';

interface StateConfig extends Pick<WeatherContextState, 'img' | 'iconName'> {
  weather?: WeatherData['weather'];
}

interface MethodsConfig {
  iconButtonRef: any;
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
