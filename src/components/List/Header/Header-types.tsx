import { TextStyle } from 'react-native';

interface DefaultStyles {
  labelStyle: TextStyle;
}

export interface HeaderStyles {
  defaultStyles: DefaultStyles;
}

interface StylesConfig extends DefaultStyles {}

export interface HeaderConfig {
  styles: StylesConfig;
}

export interface HeaderProps {
  /**
   * The Header title.
   */
  title: string;
}
