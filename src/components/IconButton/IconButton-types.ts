import { ActivityIndicatorProps, TouchableHighlightProps, ViewStyle } from "react-native";
import { Icon, IconProps } from "react-native-vector-icons/Icon";

export type Size = 'small' | 'regular' | 'large'

export type SizeStyles = {
    [key in Size]: {
        containerStyle: ViewStyle
        sizeIcon: number
    }
}

interface DefaultStyles {
    containerStyle: ViewStyle
}

export interface IconButtonStylesType {
    defaultStyles: DefaultStyles,
    sizeStyles: SizeStyles
}

interface StateConfig {
    iconProps: IconProps
    sizeIndicator: ActivityIndicatorProps['size']
}

type StylesConfig = DefaultStyles

export interface IconButtonConfig {
    state: StateConfig
    styles: StylesConfig
}

export interface IconButtonPropsType extends Omit<IconProps, 'size' | 'style'>, TouchableHighlightProps {
    type: typeof Icon,
    size: Size
    loading?: boolean
}