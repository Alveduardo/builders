import _ from 'lodash';
import { Platform, StatusBarProps } from 'react-native';

export const GLOBAL = {
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
};

export const statusBarProps: Pick<StatusBarProps, 'translucent' | 'backgroundColor'> = {
  translucent: true,
  backgroundColor: 'transparent',
};

export const isIncludedWord = (string: string = '', word: string = ''): boolean => {
  return string.includes(word);
};

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const areEqualListProps = (prevProps: any, nextProps: any) => {
  if (_.isEqual(prevProps.item, nextProps.item)) return true;
  else return false;
};

export const areEqualComponentProps = (prevProps: any, nextProps: any) => {
  if (_.isEqual(prevProps, nextProps)) return true;
  else return false;
};
