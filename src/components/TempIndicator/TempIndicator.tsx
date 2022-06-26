import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../utils/colors/colors-consts';
import Label from '../Label';
import { TempIndicatorProps } from './TempIndicator-types';

const TempIndicator = ({ min, max }: TempIndicatorProps): JSX.Element => {
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <Label>{min}°</Label>
      <LinearGradient
        colors={COLORS.TEMP_GRADIENTS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ width: 80, height: 6, borderRadius: 999, marginHorizontal: 8 }}
      />
      <Label>{max}°</Label>
    </View>
  );
};

export default TempIndicator;
