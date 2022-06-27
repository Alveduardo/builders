import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { GLOBAL } from '..';

export const stackOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
  animation: GLOBAL.IS_ANDROID ? 'none' : 'fade',
});
