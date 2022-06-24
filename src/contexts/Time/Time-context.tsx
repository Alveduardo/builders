import React, { createContext, useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { TimeContextPropsTypes, TimeContextDataType, TimeContextState } from './Time-types';

import { getHourType } from './Time-utils';
import { GLOBAL, isIncludedWord } from '../../utils';
import { getImage } from '../../utils/images/images-utils';

import api from '../../services/api';
import { getIconWeather } from '../../utils/weather/weather-utils';

export interface Location {
  latitude?: number;
  longitude?: number;
}

export const TimeContext = createContext({} as TimeContextDataType);

export const TimeProvider = ({ children }: TimeContextPropsTypes): JSX.Element => {
  const [state, setState] = useState<TimeContextState>({
    img: null,
    time: null,
    data: null,
    iconName: null,
  });

  useEffect(() => {
    (async () => {
      try {
        if (GLOBAL.IS_IOS) {
          Geolocation.requestAuthorization('whenInUse');
          requestLocation();
        } else if (GLOBAL.IS_ANDROID) {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

          if (granted === PermissionsAndroid.RESULTS.GRANTED) requestLocation();
        } else console.log('Permission denied');
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
    const { data } = await api.get(`/weather?lat=${latitude}&lon=${longitude}`);

    if (data)
      setState((oldState) => {
        const { time: oldTime, img: oldImg, iconName: oldIconName } = oldState;

        const hourType = getHourType();
        const isRain = isIncludedWord(data.weather[0].description, 'rain');

        const time = { hourType, isRain };

        let img, iconName;

        if (oldTime?.hourType !== hourType || oldTime?.isRain !== isRain) {
          img = getImage(hourType, isRain);
          iconName = getIconWeather(hourType, isRain);
        } else {
          img = oldImg;
          iconName = oldIconName;
        }

        return {
          img,
          time,
          data,
          iconName,
        };
      });
    else requestWeather({ latitude, longitude });
  };

  return <TimeContext.Provider value={{ state, requestLocation }}>{children}</TimeContext.Provider>;
};
