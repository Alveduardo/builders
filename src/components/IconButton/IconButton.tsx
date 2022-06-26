import React, { memo } from 'react';
import { ActivityIndicator, ColorValue, TouchableOpacity } from 'react-native';
import { areEqualComponentProps } from '../../utils';
import { ICON_BUTTON } from './IconButton-consts';
import { useIconButtonConfig } from './IconButton-controllers';
import { IconButtonProps } from './IconButton-types';

const IconButton = memo(
  ({
    type,
    name,
    size = 'small',
    color = '#FFF',
    loading = false,
    style = undefined,
    ...rest
  }: IconButtonProps): JSX.Element => {
    const {
      state: { iconProps, sizeIndicator },
      styles: { containerStyle },
    } = useIconButtonConfig({
      name,
      size,
      color,
    });

    const Icon = type;

    return (
      <TouchableOpacity testID={ICON_BUTTON.TEST_ID.ICON} {...rest} style={[containerStyle, style]}>
        {loading ? (
          <ActivityIndicator
            testID={ICON_BUTTON.TEST_ID.ACTIVITY_INDICATOR}
            size={sizeIndicator}
            color={color as ColorValue}
          />
        ) : (
          <Icon testID={ICON_BUTTON.TEST_ID.ICON} {...iconProps} />
        )}
      </TouchableOpacity>
    );
  },
  areEqualComponentProps,
);

export default IconButton;
