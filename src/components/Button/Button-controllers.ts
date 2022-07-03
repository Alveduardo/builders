import { useState } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { ButtonConfig, ButtonProps } from './Button-types';
import { buttonStyles } from './Button-styles';

import { Color } from '../../utils/colors/colors-types';
import { setupStyleProp } from '../../utils/style/style-utils';

export const useButtonConfig = ({ width, size, kind, disabled, style }: Partial<ButtonProps>): ButtonConfig => {
  const [isPressed, setIsPressed] = useState(false);

  const {
    defaultStyles: { containerStyle },
    sizeStyles: {
      [size!]: { buttonStyle: buttonSizeStyle },
    },
    kindStyles: {
      [kind!]: { buttonStyle: buttonKindStyle, textStyle: textKindStyle },
    },
    stateStyles: {
      onPress: {
        [kind!]: { buttonStyle: buttonPressedStyle, textStyle: textPressedStyle },
      },
      disabled: {
        [kind!]: { buttonStyle: buttonDisabledStyle, textStyle: textDisabledStyle },
      },
    },
  } = buttonStyles;

  let buttonStyle: ViewStyle = { ...containerStyle, ...buttonSizeStyle, ...buttonKindStyle },
    textStyle: TextStyle = { ...textKindStyle };

  if (isPressed) {
    buttonStyle = { ...buttonStyle, ...buttonPressedStyle };
    textStyle = { ...textStyle, ...textPressedStyle };
  }
  if (disabled) {
    buttonStyle = { ...buttonStyle, ...buttonDisabledStyle };
    textStyle = { ...textStyle, ...textDisabledStyle };
  }
  if (width) {
    buttonStyle.width = width;
  }

  const underlayColor = buttonPressedStyle.backgroundColor as Color;

  const onPressIn = () => setIsPressed(true);

  const onPressOut = () => setIsPressed(false);

  buttonStyle = setupStyleProp(style, buttonStyle) as ViewStyle;

  return {
    state: { underlayColor },
    methods: { onPressIn, onPressOut },
    styles: { buttonStyle, textColor: textStyle.color as Color },
  };
};
