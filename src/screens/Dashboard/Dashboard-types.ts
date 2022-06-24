import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';
import { AppRootStackParamList } from '../../utils/navigation/navigator-types';
import { WeatherType } from '../../utils/weather/weather-types';

interface StateConfig {
  isLoading: boolean;
}

interface MethodsConfig {
  updateWeather: () => void;
  handlePress: () => void;
}

type StylesConfig = DashboardStylesType;

export interface UseDashboardParams extends DashboardPropsType {
  data: WeatherType | null;
}

export interface DashboardConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface DashboardStylesType {
  containerStyle: ViewStyle;
  contentStyle: ViewStyle;
  updateIconStyle: ViewStyle;
  topInfoWrapperStyle: ViewStyle;
  cityStyle: TextStyle;
  timeStyle: TextStyle;
  flexDirectionRowStyle: ViewStyle;
  temparatureStyle: TextStyle;
  weatherTypeStyle: TextStyle;
  separatorStyle: ViewStyle;
  bottomInfoWrapperStyle: ViewStyle;
  infoTitleStyle: TextStyle;
  infoParagraphStyle: TextStyle;
  alignItemsCenterStyle: ViewStyle;
}

export interface DashboardPropsType {
  navigation: NativeStackNavigationProp<AppRootStackParamList, 'WeatherForecast'>;
}
