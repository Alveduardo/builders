import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { TEMP_INDICATOR } from './TempIndicator-consts';
import { TempIndicatorProps } from './TempIndicator-types';
import { useTempIndicatorConfig } from './TempIndicator-controllers';

import { COLORS } from '../../utils/colors/colors-consts';
import Label from '../Label';

const TempIndicator = ({ min, max, ...rest }: TempIndicatorProps): JSX.Element => {
  const {
    styles: { containerStyle, gradientStyle },
  } = useTempIndicatorConfig();

  return (
    <View testID={TEMP_INDICATOR.TEST_ID.CONTAINER} {...rest} style={containerStyle}>
      <Label testID={TEMP_INDICATOR.TEST_ID.MIN}>{min}°</Label>
      <LinearGradient
        testID={TEMP_INDICATOR.TEST_ID.GRADIENT}
        colors={COLORS.TEMP_GRADIENTS}
        start={TEMP_INDICATOR.GRADIENT.START}
        end={TEMP_INDICATOR.GRADIENT.END}
        style={gradientStyle}
      />
      <Label testID={TEMP_INDICATOR.TEST_ID.MAX}>{max}°</Label>
    </View>
  );
};

export default TempIndicator;
