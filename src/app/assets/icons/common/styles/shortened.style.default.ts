import { ICON_STYLE_DEFAULT } from "./icon.style.default"

export const SHORTENED_LUCIDE_STYLE_CONFIG = {
    size: ICON_STYLE_DEFAULT.lucideStyleDefault.size,
    strokeWidth: ICON_STYLE_DEFAULT.lucideStyleDefault.strokeWidth,
    color: ICON_STYLE_DEFAULT.colorDefault
} as const

export const SHORTENED_HUGE_STYLE_CONFIG = {
    'font-size': ICON_STYLE_DEFAULT.hugeStyleDefault["font-size"],
    'font-weight': ICON_STYLE_DEFAULT.hugeStyleDefault["font-weight"],
    'color': ICON_STYLE_DEFAULT.colorDefault,  
} as const