import { COLORS } from '../../utils/colors/colors-consts';
import { ButtonStyles } from './Button-types';

export const buttonStyles: ButtonStyles = {
  defaultStyles: {
    containerStyle: {
      width: '100%',
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  sizeStyles: {
    regular: {
      buttonStyle: {
        height: 50,
      },
    },
  },
  kindStyles: {
    primary: {
      buttonStyle: {
        backgroundColor: COLORS.SECONDARY,
      },
      textStyle: {
        color: '#FFF',
      },
    },
    secondary: {
      buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: COLORS.SECONDARY,
        borderWidth: 3,
      },
      textStyle: {
        color: COLORS.SECONDARY,
      },
    },
  },
  stateStyles: {
    onPress: {
      primary: {
        buttonStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        textStyle: {
          color: '#FFF',
        },
      },
      secondary: {
        buttonStyle: {
          backgroundColor: COLORS.SECONDARY,
          borderColor: COLORS.SECONDARY,
          borderWidth: 3,
        },
        textStyle: {
          color: '#FFF',
        },
      },
    },
    disabled: {
      primary: {
        buttonStyle: {
          backgroundColor: 'gray',
        },
        textStyle: {
          color: '#FFF',
        },
      },
      secondary: {
        buttonStyle: {
          backgroundColor: 'transparent',
          borderColor: 'gray',
          borderWidth: 3,
        },
        textStyle: {
          color: 'gray',
        },
      },
    },
  },
};
