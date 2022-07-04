import { ViewProps, ViewStyle } from 'react-native';

interface DefaultStyles {
  containerStyle: ViewStyle;
  gradientStyle: ViewStyle;
}

export interface TempIndicatorStyles {
  defaultStyles: DefaultStyles;
}

interface StylesConfig extends DefaultStyles {}

export interface TempIndicatorConfig {
  styles: StylesConfig;
}

export interface TempIndicatorProps extends ViewProps {
  min: number;
  max: number;
}
