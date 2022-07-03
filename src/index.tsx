import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './routes/AppRoutes';
import BottomSheet from './components/BottomSheet';
import { WeatherProvider } from './contexts/Weather';

import { statusBarProps } from './utils';

export default () => {
  return (
    <SafeAreaProvider>
      <WeatherProvider>
        <NavigationContainer>
          <BottomSheet />
          <StatusBar {...statusBarProps} />
          <Routes />
        </NavigationContainer>
      </WeatherProvider>
    </SafeAreaProvider>
  );
};
