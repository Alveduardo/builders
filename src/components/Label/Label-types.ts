import { TextProps, TextStyle } from 'react-native';
import { Color } from '../../utils/colors/colors-types';

export type LabelSize =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'regular'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge'
  | 'display';

export type SizeStyles = {
  [key in LabelSize]: {
    textStyle: TextStyle;
  };
};

interface DefaultStyles {
  textStyle: TextStyle;
}

export interface LabelStyles {
  defaultStyles: DefaultStyles;
  sizeStyles: SizeStyles;
}

type StylesConfig = DefaultStyles;

export interface LabelConfig {
  styles: StylesConfig;
}

export interface LabelProps extends TextProps {
  /**
   * Label color values.
   */
  color?: Color;

  /**
   * Label size values.
   */
  size?: LabelSize;
}
