import { TextStyle } from 'react-native';

interface DefaultStyles {
  labelStyle: TextStyle;
}

export interface HeaderStyles {
  defaultStyles: DefaultStyles;
}

type StylesConfig = DefaultStyles;

export interface HeaderConfig {
  styles: StylesConfig;
}

export interface HeaderProps {
  /**
   * The Header title.
   */
  title: string;
}
