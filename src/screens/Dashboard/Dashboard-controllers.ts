import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DashboardStyles } from './Dashboard-styles';
import { DashboardConfig, UseDashboardParams } from './Dashboard-types';
import { useCallback, useState } from 'react';
import { useTime } from '../../contexts/Time';
import useDidUpdate from '../../hooks/useDidUpdate';

export const useDashboardConfig = ({ navigation, data }: UseDashboardParams): DashboardConfig => {
  const { requestLocation } = useTime();
  const { top, bottom } = useSafeAreaInsets();

  const {
    containerStyle,
    contentStyle,
    updateIconStyle,
    topInfoWrapperStyle,
    cityStyle,
    timeStyle,
    flexDirectionRowStyle,
    temparatureStyle,
    weatherTypeStyle,
    separatorStyle,
    bottomInfoWrapperStyle,
    infoTitleStyle,
    infoParagraphStyle,
    alignItemsCenterStyle,
  } = DashboardStyles;

  const [isLoading, setLoading] = useState<boolean>(false);

  useDidUpdate(() => {
    setLoading(false);
  }, [data]);

  const updateWeather = useCallback((): void => {
    setLoading(true);

    //only for visual effects in development.
    setTimeout(requestLocation, 800);
  }, []);

  const handlePress = useCallback((): void => {
    navigation.navigate('WeatherForecast');
  }, []);

  return {
    state: {
      isLoading,
    },
    methods: {
      updateWeather,
      handlePress,
    },
    styles: {
      containerStyle,
      contentStyle: { ...contentStyle, paddingTop: top, paddingBottom: bottom },
      updateIconStyle: { ...updateIconStyle, top: top + 12 },
      topInfoWrapperStyle,
      cityStyle,
      timeStyle,
      flexDirectionRowStyle,
      temparatureStyle,
      weatherTypeStyle,
      separatorStyle,
      bottomInfoWrapperStyle,
      infoTitleStyle,
      infoParagraphStyle: { ...infoTitleStyle, ...infoParagraphStyle },
      alignItemsCenterStyle,
    },
  };
};
