import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dashboardStyles } from './Dashboard-styles';
import { DashboardConfig, DashboardProps } from './Dashboard-types';
import { useCallback, useState } from 'react';
import { useTime } from '../../contexts/Time';
import useDidUpdate from '../../hooks/useDidUpdate';

export const useDashboardConfig = ({ navigation }: DashboardProps): DashboardConfig => {
  const {
    state: { data, img, iconName },
    requestLocation,
  } = useTime();
  const { top, bottom } = useSafeAreaInsets();

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

  const [isLoading, setLoading] = useState<boolean>(false);

  useDidUpdate(() => {
    setLoading(false);
  }, [data]);

  const updateWeather = useCallback((): void => {
    setLoading(true);

    //only for visual effects in development.
    setTimeout(requestLocation, 800);
  }, []);

  const handlePress = useCallback((): void => navigation.navigate('WeatherForecast'), []);

  return {
    state: {
      img,
      iconName,
      isLoading,
      weather: data?.weather,
    },
    methods: {
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
