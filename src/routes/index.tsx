import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRootStackParamList } from '../utils/navigation/navigator-types';
import { stackOptions } from '../utils/navigation/navigator-options';

import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator<AppRootStackParamList>()

export default () => {
    return (
        <Stack.Navigator screenOptions={stackOptions}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}