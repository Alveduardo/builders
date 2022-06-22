import { IconButtonStyles } from "./IconButton-styles"
import { IconButtonConfig, IconButtonPropsType } from "./IconButton-types"

export const useIconButtonConfig = ({
    name,
    size,
    color
}: Partial<IconButtonPropsType>): IconButtonConfig => {

    let {
        defaultStyles: { containerStyle },
        sizeStyles: {
            [size!]: {
                containerStyle: containerSizeStyle,
                sizeIcon
            }
        }
    } = IconButtonStyles

    containerStyle = { ...containerStyle, ...containerSizeStyle }

    const sizeIndicator = size === 'large' ? 'large' : 'small'

    return {
        state: {
            iconProps: {
                name: name!,
                size: sizeIcon,
                color
            },
            sizeIndicator
        },
        styles: {
            containerStyle
        }
    }
}

