import React, { createContext, useEffect, useState } from 'react';
import { PermissionsAndroid, StatusBar } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SplashScreen from 'react-native-splash-screen';

import { TimeContextProps, TimeContextData, TimeContextState } from './Time-types';

import { getPeriod } from './Time-utils';
import { GLOBAL, isIncludedWord } from '../../utils';
import { getImage } from '../../utils/images/images-utils';

import api from '../../services/api';
import { getIconWeather } from '../../utils/weather/weather-utils';

export interface Location {
  latitude?: number;
  longitude?: number;
}

export const TimeContext = createContext({} as TimeContextData);

export const TimeProvider = ({ children }: TimeContextProps): JSX.Element => {
  const [state, setState] = useState<TimeContextState>({
    img: null,
    time: null,
    data: null,
    iconName: null,
  });

  useEffect(() => {
    SplashScreen.hide();

    (async () => {
      try {
        if (GLOBAL.IS_IOS) {
          Geolocation.requestAuthorization('whenInUse');
          requestLocation();
        } else if (GLOBAL.IS_ANDROID) {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

          if (granted === PermissionsAndroid.RESULTS.GRANTED) requestLocation();
        } else {
          console.log('Permission denied');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const requestLocation = (): void => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        requestWeather({ latitude, longitude });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const requestWeather = async ({ latitude, longitude }: Location) => {
    const [{ data: weather }, { data: forecast }] = await Promise.all([
      api.get(`/weather?lat=${latitude}&lon=${longitude}&lang=pt_br`),
      api.get(`/forecast?lat=${latitude}&lon=${latitude}&lang=pt_br&units=metric&cnt=11`),
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

  return <TimeContext.Provider value={{ state, requestLocation }}>{children}</TimeContext.Provider>;
};
