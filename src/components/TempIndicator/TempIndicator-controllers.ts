import { ViewStyle } from 'react-native';
import { TEMP_INDICATOR } from './TempIndicator-consts';
import { TempIndicatorProps } from './TempIndicator-types';
import { tempIndicatorStyles } from './TempIndicator-styles';

import { setupStyleProp } from '../../utils/style/style-utils';

export const useTempIndicatorConfig = ({ style }: Partial<TempIndicatorProps>) => {
  let {
    defaultStyles: { containerStyle, gradientStyle },
  } = tempIndicatorStyles;

  containerStyle = setupStyleProp(style, containerStyle, TEMP_INDICATOR.ALLOWED_PROPERTIES) as ViewStyle;

  return {
    styles: {
      containerStyle,
      gradientStyle,
    },
  };
};
