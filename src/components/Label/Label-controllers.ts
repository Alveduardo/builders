import { TextStyle } from 'react-native';
import { setupStyleProp } from '../../utils/style/style-utils';
import { LABEL } from './Label-consts';
import { labelStyles } from './Label-styles';
import { LabelConfig, LabelProps } from './Label-types';

export const useLabelConfig = ({ color, size, style }: LabelProps): LabelConfig => {
  let {
    defaultStyles: { textStyle },
    sizeStyles: {
      [size!]: { textStyle: textSizeStyle },
    },
  } = labelStyles;

  textStyle.color = color;

  textStyle = { ...textStyle, ...textSizeStyle };

  const containerStyle = setupStyleProp(style, textStyle, LABEL.ALLOWED_PROPERTIES) as TextStyle;

  return {
    styles: {
      textStyle: containerStyle,
    },
  };
};
