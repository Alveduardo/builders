import { TouchableHighlightProps, ViewStyle } from 'react-native';
import { Color } from '../../utils/colors/colors-types';

export type ButtonSize = 'regular';
export type ButtonKind = 'primary' | 'secondary';

interface DefaultStyles {
  containerStyle: ViewStyle;
}

export type SizeStyle = {
  [key in ButtonSize]: {
    buttonStyle: {
      height: number;
    };
  };
};

export type KindStyle = {
  [key in ButtonKind]: {
    buttonStyle: ViewStyle;
    textStyle: {
      color: string;
    };
  };
};

export type StateStyle = {
  onPress: {
    [key in ButtonKind]: {
      buttonStyle: ViewStyle;
      textStyle: {
        color: string;
      };
    };
  };
  disabled: {
    [key in ButtonKind]: {
      buttonStyle: ViewStyle;
      textStyle: {
        color: string;
      };
    };
  };
};

export interface ButtonStyles {
  defaultStyles: DefaultStyles;
  sizeStyles: SizeStyle;
  kindStyles: KindStyle;
  stateStyles: StateStyle;
}

interface StateConfig {
  underlayColor: Color;
}

interface MethodsConfig {
  onPressIn: () => void;
  onPressOut: () => void;
}

interface StylesConfig {
  buttonStyle: ViewStyle;
  textColor: Color;
}

export interface ButtonConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface ButtonProps extends TouchableHighlightProps {
  /**
   * The label inside the button.
   */
  label: string;

  /**
   * The function that is invoked when the button is pressed.
   */
  onPress?: () => void;

  /**
   * Possible button size values.
   */
  size?: ButtonSize;

  /**
   * Possible button color values.
   */
  kind?: ButtonKind;

  /**
   * The disabled state.
   */
  disabled?: boolean;

  /**
   * The button's width. The possible values are `'auto'`, `'100%'`, or a numeric value representing the amount of pixels.
   */
  width?: number | string;
}
