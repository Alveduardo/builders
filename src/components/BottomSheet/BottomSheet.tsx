import React from 'react';
import { Modal, View } from 'react-native';
import Animated, { FadeInDown, SlideOutDown } from 'react-native-reanimated';

import { BOTTOM_SHEET } from './BottomSheet-consts';
import { BottomSheetComponent } from './BottomSheet-types';
import { useBottomSheetConfig } from './BottomSheet-controllers';

import Label from '../Label';
import Button from '../Button';

import { COLORS } from '../../utils/colors/colors-consts';

//@ts-ignore
const BottomSheet: BottomSheetComponent = (): JSX.Element => {
  const {
    state: { visible, title, caption, primaryButton, secondaryButton },
    methods: { primaryOnPress, secondaryOnPress },
    styles: {
      containerStyle,
      contentStyle,
      containerButtonStyle,
      titleStyle,
      captionStyle,
      primaryButtonWidthStyle,
      secondaryButtonWidthStyle,
    },
  } = useBottomSheetConfig();

  return (
    <Modal
      transparent
      visible={visible}
      statusBarTranslucent
      animationType={'fade'}
      presentationStyle={'overFullScreen'}
    >
      <View style={containerStyle}>
        <Animated.View
          testID={BOTTOM_SHEET.TEST_ID.CONTAINER}
          entering={FadeInDown}
          exiting={SlideOutDown}
          style={contentStyle}
        >
          <Label size='large' style={titleStyle} color={COLORS.PRIMARY}>
            {title}
          </Label>

          <Label style={captionStyle} color={COLORS.SECONDARY}>
            {caption}
          </Label>

          <View style={containerButtonStyle}>
            <Button
              kind={'primary'}
              onPress={primaryOnPress}
              label={primaryButton.label}
              width={primaryButtonWidthStyle}
            />
            <Button
              kind={'secondary'}
              onPress={secondaryOnPress}
              label={secondaryButton.label}
              width={secondaryButtonWidthStyle}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
