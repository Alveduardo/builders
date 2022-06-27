import { WeatherForecastStyles } from './WeatherForecast-types';

export const weatherForecastStyles: WeatherForecastStyles = {
  containerStyle: {
    flex: 1,
    padding: 20,
  },
  containerContentStyle: {
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
  containerListStyle: {
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: 16,
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
  sunriseContentStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRightSmall: {
    marginRight: 6,
  },
  marginRightRegular: {
    marginRight: 8,
  },
  marginBottomDisplay: {
    marginBottom: 'auto',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
};
