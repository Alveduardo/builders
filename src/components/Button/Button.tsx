import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';

import { ButtonProps } from './Button-types';
import { useButtonConfig } from './Button-controllers';

import Label from '../Label';
import { BUTTON } from './Button-consts';

const Button = ({
  label,
  width = '100%',
  size = 'regular',
  kind = 'primary',
  disabled = false,
  onPress = () => {},
  style = undefined,
  ...rest
}: ButtonProps): JSX.Element => {
  const {
    state: { underlayColor },
    methods: { onPressIn, onPressOut },
    styles: { buttonStyle, textColor },
  } = useButtonConfig({
    width,
    size,
    kind,
    disabled,
    style,
  });

  return (
    <TouchableHighlight
      testID={BUTTON.TEST_ID.CONTAINER}
      {...rest}
      {...{
        style: buttonStyle,
        disabled,
        onPress,
        onPressIn,
        onPressOut,
        underlayColor,
      }}
    >
      <Label color={textColor}>{label}</Label>
    </TouchableHighlight>
  );
};

export default Button;
