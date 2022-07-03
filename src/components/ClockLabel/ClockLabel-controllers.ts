import { useEffect, useState } from 'react';
import { ClockLabelConfig, ClockLabelProps } from './ClockLabel-types';

import useConstructor from '../../hooks/useConstructor';
import useInterval from '../../hooks/useInterval';
import useMounted from '../../hooks/useMounted';

import { getCurrentSeconds, getFormatedDate } from '../../utils/date/date-utils';
import { setupStyleProp } from '../../utils/style/style-utils';
import { ViewStyle } from 'react-native';

export const useClockLabelConfig = ({ style }: Partial<ClockLabelProps>): ClockLabelConfig => {
  const initialInterval = useConstructor(() => {
    return 60 - getCurrentSeconds();
  });

  const containerStyle = setupStyleProp(style) as ViewStyle;

  const mounted = useMounted();

  const [date, setDate] = useState(getFormatedDate());

  const intervalRef = useInterval(
    () => {
      setDate(getFormatedDate());
    },
    mounted.current ? 60000 : initialInterval,
  );

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    state: {
      date,
    },
    styles: {
      containerStyle,
    },
  };
};
