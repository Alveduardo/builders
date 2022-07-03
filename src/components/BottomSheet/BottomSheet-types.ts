import { TextStyle, ViewStyle } from 'react-native';

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

interface DefaultButton {
  label: string;
  onPress?: () => void;
  onRequestClose?: boolean;
}

export interface BottomSheetState {
  visible: boolean;
  title: string;
  caption: string;
  primaryButton: DefaultButton;
  secondaryButton: DefaultButton;
}

interface StylesConfig extends DefaultStyles {}

export interface BottomSheetConfig {
  state: StateConfig;
  methods: MethodsConfig;
  styles: StylesConfig;
}

export interface BottomSheetComponent extends React.FC {
  show: ({}: Omit<BottomSheetState, 'visible'>) => void;
  hide: () => void;
}

export interface BottomSheetStyles {
  defaultStyles: DefaultStyles;
}
