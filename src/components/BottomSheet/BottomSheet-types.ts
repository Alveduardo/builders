import { TextStyle, ViewStyle } from 'react-native';

export interface BottomSheetState {
  visible: boolean;
  title: string;
  description: string;
  primaryButton: DefaultButton;
  secondaryButton: DefaultButton;
}

interface DefaultButton {
  label: string;
  onPress?: () => void;
  onRequestClose?: boolean;
}

export interface BottomSheetStyles {
  defaultStyles: DefaultStyles;
}

interface DefaultStyles {
  containerStyle: ViewStyle;
  contentStyle: ViewStyle;
  titleStyle: TextStyle;
  descriptionStyle: TextStyle;
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
