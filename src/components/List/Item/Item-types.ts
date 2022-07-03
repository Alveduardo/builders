import { TextStyle, ViewStyle } from 'react-native';

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

type StylesConfig = DefaultStyles;

export interface ItemConfig {
  state: StateConfig;
  styles: StylesConfig;
}

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

export interface ItemProps {
  item: ItemT;
  index: number;
}
