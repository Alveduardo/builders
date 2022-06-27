import { tempIndicatorStyles } from './TempIndicator-styles';

export const useTempIndicatorConfig = () => {
  const {
    defaultStyles: { containerStyle, gradientStyle },
  } = tempIndicatorStyles;

  return {
    styles: {
      containerStyle,
      gradientStyle,
    },
  };
};
