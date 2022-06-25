import { labelStyles } from './Label-styles';
import { LabelConfig, LabelProps } from './Label-types';

export const useLabelConfig = ({ color, size }: Partial<LabelProps>): LabelConfig => {
    const {
        defaultStyles: { textStyle },
        sizeStyles: {
            [size!]: { textStyle: sizeStyle },
        },
    } = labelStyles;

    textStyle.color = color

    return {
        styles: {
            textStyle: { ...textStyle, ...sizeStyle },
        },
    };
};
