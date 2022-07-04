import { TextStyle, ViewStyle } from 'react-native';

export interface ItemT {
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  rain?: {};
}

interface DefaultStyles {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  iconStyle: ViewStyle;
  tempIndicatorStyle: ViewStyle;
}

export interface ItemStyles {
  defaultStyles: DefaultStyles;
}

interface StateConfig {
  hour: string;
  iconName: string;
}

interface StylesConfig extends DefaultStyles {}

export interface ItemConfig {
  state: StateConfig;
  styles: StylesConfig;
}

export interface ItemProps {
  /**
   * The list item.
   */
  item: ItemT;

  /**
   * The list index.
   */
  index: number;
}
