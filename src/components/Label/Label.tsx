import React from 'react';
import { Text } from 'react-native';
import { useLabelConfig } from './Label-controllers';
import { LabelProps } from './Label-types';

const Label = ({ children, color = '#FFF', size = 'small', style = undefined, ...rest }: LabelProps): JSX.Element => {
  const {
    styles: { textStyle },
  } = useLabelConfig({ color, size });

  return (
    <Text testID={''} {...rest} style={[textStyle, style]}>
      {children}
    </Text>
  );
};

export default Label;
