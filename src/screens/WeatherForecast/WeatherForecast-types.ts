import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';
import { AppRootStackParamList } from '../../utils/navigation/navigator-types';
import { WeatherType } from '../../utils/weather/weather-types';

interface StateConfig {

}

interface MethodsConfig {

}

type StylesConfig = WeatherForecastStylesType;

export interface UseWeatherForecastParams extends WeatherForecastPropsType {
    data: WeatherType | null;
}

export interface WeatherForecastConfig {
    state: StateConfig;
    methods: MethodsConfig;
    styles: StylesConfig;
}

export interface WeatherForecastStylesType {
    containerStyle: ViewStyle;
    contentStyle: ViewStyle;

}

export interface WeatherForecastPropsType {
    navigation: NativeStackNavigationProp<AppRootStackParamList>;
}
