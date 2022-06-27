import { headerStyles } from './Header-styles';

export const useHeaderConfig = () => {
  const {
    defaultStyles: { labelStyle },
  } = headerStyles;

  return {
    styles: {
      labelStyle,
    },
  };
};
