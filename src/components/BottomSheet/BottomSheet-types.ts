import { TextStyle, ViewStyle } from 'react-native';

interface DefaultButton {
  label: string;
  onPress?: () => void;
  onRequestClose?: boolean;
}

export interface BottomSheetStyles {
  defaultStyles: DefaultStyles;
}

export interface BottomSheetState {
  visible: boolean;
  title: string;
  caption: string;
  primaryButton: DefaultButton;
  secondaryButton: DefaultButton;
}

interface DefaultStyles {
  containerStyle: ViewStyle;
  contentStyle: ViewStyle;
  titleStyle: TextStyle;
  captionStyle: TextStyle;
  containerButtonStyle: ViewStyle;
  primaryButtonWidthStyle: ViewStyle['width'];
  secondaryButtonWidthStyle: ViewStyle['width'];
}

interface StateConfig extends BottomSheetState {}

interface MethodsConfig {
  primaryOnPress: () => void;
  secondaryOnPress: () => void;
}

interface StylesConfig extends DefaultStyles {}

export interface BottomSheetConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface BottomSheetComponent extends React.FC {
  /**
   * When the method is called, show BottomSheet.
   */
  show: ({}: Omit<BottomSheetState, 'visible'>) => void;

  /**
   * When the method is called, hide BottomSheet.
   */
  hide: () => void;
}
