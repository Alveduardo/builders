import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRootStackParamList } from '../utils/navigation/navigator-types';
import { stackOptions } from '../utils/navigation/navigator-options';

import Dashboard from '../screens/Dashboard';
import WeatherForecast from '../screens/WeatherForecast';

const Stack = createNativeStackNavigator<AppRootStackParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={stackOptions} initialRouteName={'Dashboard'}>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='WeatherForecast' component={WeatherForecast} />
    </Stack.Navigator>
  );
};
