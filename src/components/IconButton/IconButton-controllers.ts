import { IconButtonStyles } from './IconButton-styles';
import { IconButtonConfig, IconButtonPropsType } from './IconButton-types';

export const useIconButtonConfig = ({ name, size, color }: Partial<IconButtonPropsType>): IconButtonConfig => {
  const {
    defaultStyles: { containerStyle },
    sizeStyles: {
      [size!]: { sizeIcon },
    },
  } = IconButtonStyles;

  const sizeIndicator = size === 'large' ? 'large' : 'small';

  return {
    state: {
      iconProps: {
        name: name!,
        size: sizeIcon,
        color,
      },
      sizeIndicator,
    },
    styles: {
      containerStyle,
    },
  };
};
