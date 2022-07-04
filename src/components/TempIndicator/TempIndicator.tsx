import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { TEMP_INDICATOR } from './TempIndicator-consts';
import { TempIndicatorProps } from './TempIndicator-types';
import { useTempIndicatorConfig } from './TempIndicator-controllers';

import Label from '../Label';

const TempIndicator = ({ min, max, style, ...rest }: TempIndicatorProps): JSX.Element => {
  const {
    styles: { containerStyle, gradientStyle },
  } = useTempIndicatorConfig({ style });

  return (
    <View testID={TEMP_INDICATOR.TEST_ID.CONTAINER} {...rest} {...{ style: [containerStyle, style] }}>
      <Label testID={TEMP_INDICATOR.TEST_ID.MIN}>{min}°</Label>
      <LinearGradient
        style={gradientStyle}
        testID={TEMP_INDICATOR.TEST_ID.GRADIENT}
        colors={TEMP_INDICATOR.GRADIENT.COLORS}
        start={TEMP_INDICATOR.GRADIENT.START}
        end={TEMP_INDICATOR.GRADIENT.END}
      />
      <Label testID={TEMP_INDICATOR.TEST_ID.MAX}>{max}°</Label>
    </View>
  );
};

export default TempIndicator;
