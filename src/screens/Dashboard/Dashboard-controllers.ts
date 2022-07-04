import { useCallback, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { dashboardStyles } from './Dashboard-styles';
import { DashboardConfig, DashboardProps } from './Dashboard-types';

import { IconButtonRef } from '../../components/IconButton/IconButton-types';

import useDidUpdate from '../../hooks/useDidUpdate';
import { useWeather } from '../../contexts/Weather';

export const useDashboardConfig = ({ navigation }: DashboardProps): DashboardConfig => {
  const { top, bottom } = useSafeAreaInsets();

  const {
    state: { data, img, iconName },
    requestLocation,
  } = useWeather();

  const {
    containerStyle,
    contentStyle,
    updateIconStyle,
    topInfoWrapperStyle,
    weatherTypeStyle,
    separatorStyle,
    bottomInfoWrapperStyle,
    alignItemsCenterStyle,
    flexDirectionRowStyle,
    fontBoldStyle,
  } = dashboardStyles;

  const iconButtonRef = useRef<IconButtonRef>(null);

  useDidUpdate(() => {
    iconButtonRef.current?.setLoading(false);
  }, [data]);

  const updateWeather = useCallback((): void => {
    iconButtonRef.current?.setLoading(true);

    //only for visual effects in development.
    setTimeout(requestLocation, 800);
  }, []);

  const handlePress = useCallback((): void => navigation.navigate('WeatherForecast'), []);

  return {
    state: {
      img,
      iconName,
      weather: data?.weather,
    },
    methods: {
      iconButtonRef,
      handlePress,
      updateWeather,
    },
    styles: {
      containerStyle,
      contentStyle: { ...contentStyle, paddingTop: top, paddingBottom: bottom },
      updateIconStyle: { ...updateIconStyle, top: top + 12 },
      topInfoWrapperStyle,
      weatherTypeStyle,
      separatorStyle,
      bottomInfoWrapperStyle,
      alignItemsCenterStyle,
      flexDirectionRowStyle,
      fontBoldStyle,
    },
  };
};
