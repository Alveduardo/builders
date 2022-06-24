import React, { } from 'react';
import { ImageBackground, View, } from 'react-native';



import { useTime } from '../../contexts/Time';

import { WeatherForecastPropsType } from './WeatherForecast-types';
import { useWeatherForecastConfig } from './WeatherForecast-controllers';

export default ({ navigation }: WeatherForecastPropsType) => {
    const {
        state: { data, img, iconName },
    } = useTime();

    const {
        state: { },
        methods: { },
        styles: {
            containerStyle,
            contentStyle,
        },
    } = useWeatherForecastConfig({
        navigation,
        data,
    });

    return (
        <ImageBackground source={img!} fadeDuration={0} style={containerStyle}>
            <View style={contentStyle}>

            </View>
        </ImageBackground>
    );
};
