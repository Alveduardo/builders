import { BottomSheetStyles } from './BottomSheet-types';

export const bottomSheetStyles: BottomSheetStyles = {
  defaultStyles: {
    containerStyle: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    contentStyle: {
      width: '100%',
      paddingTop: 20,
      paddingHorizontal: 20,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    titleStyle: {
      marginBottom: 8,
    },
    captionStyle: {
      marginBottom: 24,
    },
    containerButtonStyle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    primaryButtonWidthStyle: '52%',
    secondaryButtonWidthStyle: '46%',
  },
};
