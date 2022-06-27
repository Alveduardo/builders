import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { weatherForecastStyles } from './WeatherForecast-styles';
import { WeatherForecastConfig, WeatherForecastProps } from './WeatherForecast-types';
import { useTime } from '../../contexts/Time';

export const useWeatherForecastConfig = ({ navigation }: WeatherForecastProps): WeatherForecastConfig => {
  const {
    state: { data, img },
  } = useTime();

  const { top, bottom } = useSafeAreaInsets();

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
