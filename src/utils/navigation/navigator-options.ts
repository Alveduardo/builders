import { GLOBAL } from '..';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const stackOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: GLOBAL.IS_ANDROID ? 'none' : 'fade',
};
