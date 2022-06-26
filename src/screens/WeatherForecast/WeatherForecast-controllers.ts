import { useCallback, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { weatherForecastStyles } from './WeatherForecast-styles';
import { WeatherForecastConfig, WeatherForecastProps } from './WeatherForecast-types';
import { useTime } from '../../contexts/Time';

export const useWeatherForecastConfig = ({ navigation }: WeatherForecastProps): WeatherForecastConfig => {
  const { top, bottom } = useSafeAreaInsets();

  const {
    containerStyle,
    contentStyle,
    goBackIconStyle,
    tempMaxMinStyle,
    forecastLabelStyle,
    containerListStyle,
    containerBottomStyle,
    containerCardStyle,
    containerTitleCardStyle,
    textAlignCenter,
    borderRounded,
  } = weatherForecastStyles;

  const {
    state: { data, img },
  } = useTime();

  const goBack = () => {
    navigation.goBack();
  };

  return {
    state: {
      weather: data?.weather!,
      forecast: data?.forecast,
      img,
    },
    methods: {
      goBack,
    },
    styles: {
      containerStyle,
      contentStyle: { ...contentStyle, marginBottom: bottom },
      goBackIconStyle: { ...goBackIconStyle, top: top + 16 },
      feelsLikeTitleStyle: { marginTop: top, ...textAlignCenter },
      tempMaxMinStyle: { ...tempMaxMinStyle, ...textAlignCenter },
      forecastLabelStyle,
      containerListStyle,
      containerBottomStyle,
      containerCardStyle,
      containerTitleCardStyle,
      textAlignCenter,
      borderRounded,
    },
  };
};
