import { useState } from 'react';
import { ViewStyle } from 'react-native';

import { iconButtonStyles } from './IconButton-styles';
import { IconButtonConfig, IconButtonProps } from './IconButton-types';

import { setupStyleProp } from '../../utils/style/style-utils';
import { ICON_BUTTON } from './IconButton-consts';

export const useIconButtonConfig = ({
  name,
  size,
  color,
  disabled,
  onPress,
  style,
}: Partial<IconButtonProps>): IconButtonConfig => {
  let {
    defaultStyles: { containerStyle },
    sizeStyles: {
      [size!]: { iconSize },
    },
  } = iconButtonStyles;

  containerStyle = setupStyleProp(style, containerStyle, ICON_BUTTON.ALLOWED_PROPERTIES) as ViewStyle;

  const [loading, setLoading] = useState(false);

  return {
    state: {
      loading,
      disabled: disabled ?? (!onPress || loading),
      iconProps: {
        name: name!,
        size: iconSize,
        color,
      },
    },
    methods: { setLoading },
    styles: {
      containerStyle,
    },
  };
};
