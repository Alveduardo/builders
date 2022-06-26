import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './routes';
import { TimeProvider } from './contexts/Time';

export default () => {
  const statusBarProps: Pick<StatusBarProps, 'translucent' | 'backgroundColor'> = {
    translucent: true,
    backgroundColor: 'transparent',
  };

  return (
    <SafeAreaProvider>
      <TimeProvider>
        <NavigationContainer>
          <StatusBar {...statusBarProps} />
          <Routes />
        </NavigationContainer>
      </TimeProvider>
    </SafeAreaProvider>
  );
};
