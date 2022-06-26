import { ActivityIndicatorProps, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Icon, IconProps } from 'react-native-vector-icons/Icon';

export type Size = 'xxxSmall' | 'xxSmall' | 'xSmall' | 'small' | 'regular' | 'large';

export type SizeStyles = {
  [key in Size]: {
    iconSize: number;
  };
};

interface DefaultStyles {
  containerStyle: ViewStyle;
}

export interface IconButtonStyles {
  defaultStyles: DefaultStyles;
  sizeStyles: SizeStyles;
}

interface StateConfig {
  iconProps: IconProps;
  sizeIndicator: ActivityIndicatorProps['size'];
}

type StylesConfig = DefaultStyles;

export interface IconButtonConfig {
  state: StateConfig;
  styles: StylesConfig;
}

export interface IconButtonProps extends Omit<IconProps, 'size' | 'style'>, TouchableOpacityProps {
  type: typeof Icon;
  size?: Size;
  loading?: boolean;
}
