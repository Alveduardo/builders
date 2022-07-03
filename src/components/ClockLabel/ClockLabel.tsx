import React, { memo } from 'react';

import { ClockLabelProps } from './ClockLabel-types';
import { useClockLabelConfig } from './ClockLabel-controllers';

import Label from '../Label';

const ClockLabel = memo(({ size, color, style, ...rest }: ClockLabelProps) => {
  const {
    state: { date },
    styles: { containerStyle },
  } = useClockLabelConfig({ style });

  return <Label {...{ rest, size, color, style: containerStyle }}>{date}</Label>;
});

export default ClockLabel;
