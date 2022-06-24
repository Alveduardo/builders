import { useCallback, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WeatherForecastStyles } from './WeatherForecast-styles';
import { WeatherForecastConfig, UseWeatherForecastParams } from './WeatherForecast-types';
import { useTime } from '../../contexts/Time';

export const useWeatherForecastConfig = ({ navigation, data }: UseWeatherForecastParams): WeatherForecastConfig => {
    const { } = useTime();
    const { top, bottom } = useSafeAreaInsets();

    const {
        containerStyle,
        contentStyle,

    } = WeatherForecastStyles;

    return {
        state: {
        },
        methods: {

        },
        styles: {
            containerStyle,
            contentStyle: { ...contentStyle, paddingTop: top, paddingBottom: bottom },
        },
    };
};
