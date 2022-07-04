import React, { memo, forwardRef, ElementType, useImperativeHandle } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

import { ICON_BUTTON } from './IconButton-consts';
import { IconButtonProps } from './IconButton-types';
import { useIconButtonConfig } from './IconButton-controllers';

import { areEqualComponentProps } from '../../utils';
import { Color } from '../../utils/colors/colors-types';

const IconButton = memo(
  forwardRef(
    (
      { type, name, size = 'small', color = '#FFF', onPress = undefined, style = undefined, ...rest }: IconButtonProps,
      ref,
    ): JSX.Element => {
      const {
        state: { loading, disabled, iconProps },
        methods: { setLoading },
        styles: { containerStyle },
      } = useIconButtonConfig({
        name,
        size,
        color,
        onPress,
        disabled: rest?.disabled,
        style,
      });

      useImperativeHandle(ref, () => {
        return { setLoading };
      });

      const Container = (onPress ? TouchableOpacity : View) as ElementType;
      const Icon = type;

      return (
        <Container testID={ICON_BUTTON.TEST_ID.CONTAINER} {...rest} {...{ onPress, disabled, style: containerStyle }}>
          {loading ? (
            <ActivityIndicator testID={ICON_BUTTON.TEST_ID.ACTIVITY_INDICATOR} size={'small'} color={color as Color} />
          ) : (
            <Icon testID={ICON_BUTTON.TEST_ID.ICON} {...iconProps} />
          )}
        </Container>
      );
    },
  ),
  areEqualComponentProps,
);

export default IconButton;
