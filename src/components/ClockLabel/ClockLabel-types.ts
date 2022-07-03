import { ViewStyle } from 'react-native';

import { LabelProps } from '../Label';

interface StateConfig {
  date: string;
}

interface StylesConfig {
  containerStyle: ViewStyle;
}

export interface ClockLabelConfig {
  state: StateConfig;
  styles: StylesConfig;
}

export interface ClockLabelProps extends LabelProps {}
