import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheet from './BottomSheet';
import { BOTTOM_SHEET } from './BottomSheet-consts';
import { bottomSheetStyles } from './BottomSheet-styles';
import { BottomSheetConfig, BottomSheetState } from './BottomSheet-types';

export const useBottomSheetConfig = (): BottomSheetConfig => {
  const { bottom } = useSafeAreaInsets();

  const {
    defaultStyles: {
      containerStyle,
      contentStyle,
      containerButtonStyle,
      titleStyle,
      descriptionStyle,
      primaryButtonWidthStyle,
      secondaryButtonWidthStyle,
    },
  } = bottomSheetStyles;

  const [state, setState] = useState<BottomSheetState>(BOTTOM_SHEET.INITIAL_STATE);

  BottomSheet.show = ({ title, description, primaryButton, secondaryButton }) => {
    setState({
      visible: true,
      title,
      description,
      primaryButton,
      secondaryButton,
    });
  };

  BottomSheet.hide = () => {
    setState({
      ...BOTTOM_SHEET.INITIAL_STATE,
      visible: false,
    });
  };

  const primaryOnPress = () => {
    state.primaryButton.onPress?.();
    if (state.primaryButton?.onRequestClose) BottomSheet.hide();
  };

  const secondaryOnPress = () => {
    state.secondaryButton.onPress?.();
    if (state.secondaryButton?.onRequestClose) BottomSheet.hide();
  };

  return {
    state,
    methods: {
      primaryOnPress,
      secondaryOnPress,
    },
    styles: {
      containerStyle,
      contentStyle,
      titleStyle,
      descriptionStyle,
      containerButtonStyle: { ...containerButtonStyle, paddingBottom: 16 + bottom },
      primaryButtonWidthStyle,
      secondaryButtonWidthStyle,
    },
  };
};
