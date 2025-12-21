export type { IIconMapConfig } from './models/icon.map.model'

export type { 
    IIconMetadata
} from './models/icon.metadata.model';

export {
    ICON_METADATA_GLOBAL, 
    ICON_METADATA_PORTAL, 
    ICON_METADATA_TAGS, 
} from './models/icon.metadata.model';

export { 
    useHugeStyleWithAccentColor, 
    useLucideStyleWithAccentColor 
} from './helper/useAccentStyle';

export { 
    ICON_STYLE_DEFAULT, 
    ICON_ACCENT_COLOR_DEFAULT 
} from './styles/icon.style.default'

export { 
    SHORTENED_BUNDLED_STYLE_CONFIG,
    SHORTENED_CDN_STYLE_CONFIG
} from './styles/shortened.style.default';

export {
 CDN_ICON_SIZE_TOKEN_VALUE,
 CDN_ICON_STROKEWIDTH_TOKEN_VALUE,
 BUNDLED_ICON_SIZE_TOKEN_VALUE,
 BUNDLED_ICON_STROKE_WIDTH_TOKEN_VALUE
} from './models/icon.token';