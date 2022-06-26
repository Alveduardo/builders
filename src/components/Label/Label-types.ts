import { TextProps, TextStyle } from 'react-native';
import { Color } from '../../utils/colors/colors-types';

export type Size = 'xxSmall' | 'xSmall' | 'small' | 'regular' | 'large' | 'xLarge' | 'xxLarge' | 'xxxLarge' | 'display';

export type SizeStyles = {
  [key in Size]: {
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
  color?: Color;
  size?: Size;
}
