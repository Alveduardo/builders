import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { weatherForecastStyles } from './WeatherForecast-styles';
import { WeatherForecastConfig, WeatherForecastProps } from './WeatherForecast-types';
import { useWeather } from '../../contexts/Weather';

export const useWeatherForecastConfig = ({ navigation }: WeatherForecastProps): WeatherForecastConfig => {
  const { top, bottom } = useSafeAreaInsets();

  const {
    state: { data, img },
  } = useWeather();

  const {
    containerStyle,
    containerContentStyle,
    goBackIconStyle,
    tempMaxMinStyle,
    containerListStyle,
    containerBottomStyle,
    containerCardStyle,
    containerTitleCardStyle,
    sunriseContentStyle,
    marginRightSmall,
    marginRightRegular,
    marginBottomDisplay,
    textAlignCenter,
  } = weatherForecastStyles;

  const goBack = () => navigation.goBack();

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
      containerContentStyle: { ...containerContentStyle, marginBottom: bottom },
      goBackIconStyle: { ...goBackIconStyle, top: top + 16 },
      feelsLikeTitleStyle: { marginTop: top, ...textAlignCenter },
      tempMaxMinStyle: { ...tempMaxMinStyle, ...textAlignCenter },
      containerListStyle,
      containerBottomStyle,
      containerCardStyle,
      containerTitleCardStyle,
      sunriseContentStyle,
      marginRightSmall,
      marginRightRegular,
      marginBottomDisplay,
      textAlignCenter,
    },
  };
};
