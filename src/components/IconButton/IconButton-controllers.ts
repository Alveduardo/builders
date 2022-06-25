import { iconButtonStyles } from './IconButton-styles';
import { IconButtonConfig, IconButtonProps } from './IconButton-types';

export const useIconButtonConfig = ({ name, size, color }: Partial<IconButtonProps>): IconButtonConfig => {
  const {
    defaultStyles: { containerStyle },
    sizeStyles: {
      [size!]: { iconSize },
    },
  } = iconButtonStyles;

  const sizeIndicator = size === 'large' ? 'large' : 'small';

  return {
    state: {
      iconProps: {
        name: name!,
        size: iconSize,
        color,
      },
      sizeIndicator,
    },
    styles: {
      containerStyle,
    },
  };
};
