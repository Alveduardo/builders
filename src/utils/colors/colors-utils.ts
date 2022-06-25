import { HEX } from "./colors-types";

export const colorBrightness = (hex: string, percent: any): HEX => {

    let newHex = hex.replace(/^\s*#|\s*$/g, '')

    if (newHex.length == 3)
        newHex = newHex.replace(/(.)/g, '$1$1')

    const r = parseInt(newHex.substring(0, 2), 16),
        g = parseInt(newHex.substring(2, 4), 16),
        b = parseInt(newHex.substring(4, 7), 16)

    return '#' +
        ((0 | (1 << 8) + r + (256 - r) * percent / 100).toString(16)).substring(1) +
        ((0 | (1 << 8) + g + (256 - g) * percent / 100).toString(16)).substring(1) +
        ((0 | (1 << 8) + b + (256 - b) * percent / 100).toString(16)).substring(1) as HEX
};

export const rgbaToHex = (r: number, g: number, b: number, a: number): HEX => {

    const outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
        Math.round(a * 255).toString(16).substring(0, 2)
    ];

    outParts.forEach((v, i) => {
        if (v.length === 1)
            outParts[i] = '0' + v
    })

    return ('#' + outParts.join('')) as HEX
}

