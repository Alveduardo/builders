import { WeatherForecastStyles } from './WeatherForecast-types';

export const weatherForecastStyles: WeatherForecastStyles = {
  containerStyle: {
    flex: 1,
    padding: 20,
  },
  contentStyle: {
    flexGrow: 1,
    borderRadius: 20,
  },
  goBackIconStyle: {
    left: 16,
    zIndex: 1,
    position: 'absolute',
  },
  tempMaxMinStyle: {
    marginBottom: 16,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  borderRounded: {
    borderRadius: 20,
  },
  forecastLabelStyle: {
    opacity: 0.8,
    marginBottom: 16,
    textAlign: 'center',
  },
  containerListStyle: {
    flexGrow: 1,
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 16,
  },
  containerBottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 160,
  },
  containerCardStyle: {
    width: '49%',
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  containerTitleCardStyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 4,
    opacity: 0.8,
  },
};
