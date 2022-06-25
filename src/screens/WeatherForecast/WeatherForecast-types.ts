import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';
import { AppRootStackParamList } from '../../utils/navigation/navigator-types';
import { Weather } from '../../utils/weather/weather-types';

interface StateConfig {

}

interface MethodsConfig {

}

type StylesConfig = WeatherForecastStyles;

export interface UseWeatherForecastProps extends WeatherForecastProps {
    data: Weather | null;
}

export interface WeatherForecastConfig {
    state: StateConfig;
    methods: MethodsConfig;
    styles: StylesConfig;
}

export interface WeatherForecastStyles {
    containerStyle: ViewStyle;
    contentStyle: ViewStyle;

}

export interface WeatherForecastProps {
    navigation: NativeStackNavigationProp<AppRootStackParamList>;
}
