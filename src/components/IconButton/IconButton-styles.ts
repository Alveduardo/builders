import { IconButtonStylesType } from "./IconButton-types";

export const IconButtonStyles: IconButtonStylesType = {
    defaultStyles: {
        containerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
    sizeStyles: {
        small: {
            containerStyle: {
                width: 32 + 24,
                height: 32 + 24,
            },
            sizeIcon: 32
        },
        regular: {
            containerStyle: {
                width: 40 + 30,
                height: 40 + 30,
            },
            sizeIcon: 48
        },
        large: {
            containerStyle: {
                width: 64 + 36,
                height: 64 + 36,
            },
            sizeIcon: 64
        }
    }
} 