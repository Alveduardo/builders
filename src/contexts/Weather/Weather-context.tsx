import React, { createContext, useEffect, useState } from 'react';
import { Linking, PermissionsAndroid, StatusBar } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SplashScreen from 'react-native-splash-screen';

import { getIconWeather, getPeriod } from './Weather-utils';
import { WeatherContextProps, WeatherContextData, WeatherContextState, Location } from './Weather-types';

import { GLOBAL, isIncludedWord } from '../../utils';
import { getImage } from '../../utils/images/images-utils';

import api from '../../services/api';
import { WEATHER } from './Weather-consts';
import BottomSheet from '../../components/BottomSheet';

export const WeatherContext = createContext({} as WeatherContextData);

export const WeatherProvider = ({ children }: WeatherContextProps): JSX.Element => {
  const [state, setState] = useState<WeatherContextState>({
    img: null,
    time: null,
    data: null,
    iconName: null,
  });

  useEffect(() => {
    SplashScreen.hide();
    requestPermissions();
  }, []);

  const callBottomSheet = () => {
    BottomSheet.show({
      title: 'Alerta',
      caption: 'Para continuar é necessário ter a permissão da localização do usuário.',
      primaryButton: {
        label: 'Abrir configurações',
        onPress: Linking.openSettings,
      },
      secondaryButton: {
        label: 'Tentar novamente',
        onPress: requestPermissions,
        onRequestClose: true,
      },
    });
  };

  const requestPermissions = async () => {
    try {
      let response;
      if (GLOBAL.IS_IOS) response = await Geolocation.requestAuthorization('whenInUse');
      else if (GLOBAL.IS_ANDROID)
        response = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

      if (response === 'granted') requestLocation();
      else callBottomSheet();
    } catch (error) {
      console.log('requestPermissions:', error);
    }
  };

  const requestLocation = (): void => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        requestWeather({ latitude, longitude });
      },
      (error) => {
        console.log('requestLocation', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const requestWeather = async ({ latitude, longitude }: Location) => {
    const [{ data: weather }, { data: forecast }] = await Promise.all([
      api.get(`/weather?lat=${latitude}&lon=${longitude}&lang=${WEATHER.API.LANG}`),
      api.get(
        `/forecast?lat=${latitude}&lon=${latitude}&lang=${WEATHER.API.LANG}&units=${WEATHER.API.UNITS}&cnt=${WEATHER.API.FORECAST_CNT}`,
      ),
    ]);

    if (weather)
      setState((oldState) => {
        const { time: oldTime, img: oldImg, iconName: oldIconName } = oldState;

        const period = getPeriod();
        const isRain = weather?.rain ? true : false;

        const time = { period, isRain };

        let img, iconName;

        if (oldTime?.period !== period || oldTime?.isRain !== isRain) {
          img = getImage(period, isRain);
          iconName = getIconWeather(period, isRain, isIncludedWord(weather.weather[0].description, 'limpo'));
        } else {
          img = oldImg;
          iconName = oldIconName;
        }

        period === 'day' ? StatusBar.setBarStyle('dark-content') : StatusBar.setBarStyle('light-content');

        return {
          img,
          time,
          data: {
            weather,
            forecast,
          },
          iconName,
        };
      });
    else requestWeather({ latitude, longitude });
  };

  return <WeatherContext.Provider value={{ state, requestLocation }}>{children}</WeatherContext.Provider>;
};
