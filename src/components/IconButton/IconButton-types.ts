import { Dispatch } from 'react';
import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { Icon, IconProps } from 'react-native-vector-icons/Icon';

export interface IconButtonRef {
  setLoading: (value: boolean) => void;
}

export type IconButtonSize = 'xxxSmall' | 'xxSmall' | 'xSmall' | 'small' | 'regular' | 'large';

export type SizeStyles = {
  [key in IconButtonSize]: {
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
  loading: boolean;
  disabled: boolean;
  iconProps: IconProps;
}

interface MethodsConfig {
  setLoading: Dispatch<boolean>;
}

type StylesConfig = DefaultStyles;

export interface IconButtonConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface IconButtonProps extends Omit<IconProps, 'size' | 'style'>, TouchableOpacityProps {
  type: typeof Icon;
  size?: IconButtonSize;
  loading?: boolean;
}
