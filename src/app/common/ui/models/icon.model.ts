import { LucideIconData } from "lucide-angular";

// Providers
export const ICON_PROVIDERS = [
    "lucideIcon",
    "hugeIcon",
    "phosporIcon",
    "boxIcon",
] as const

// Bundled icon main config
export interface IIconBundledItemConfig {
    icon: LucideIconData;
    size: number;
    strokeWidth: number;
    color: string;
}
// Default icon style config
export type IIconBundledStyleConfig = Omit<IIconBundledItemConfig, 'icon'>;

// CDN icon main config
export interface IIconCdnItemConfig {
    icon: string;
    'font-size': string;
    'color': string;
    'font-weight': string;
}
// Cdn icon style config
export type IIconCdnStyleConfig = Omit<IIconCdnItemConfig, 'icon'>;

// Multi provider icon config
export interface IMultiProviderIconConfig {
    provider: {
        bundledIcon: {
            icon: LucideIconData;
            style: IIconBundledStyleConfig;
        },
        cdnIcon: {
            icon: IIconCdnItemConfig['icon'];
            style: IIconCdnStyleConfig;
        }
    }
}

// Multi provider icon style config
export interface IMultiProviderIconStyleConfig {
    provider: {
        bundledIcon: IIconBundledStyleConfig;
        cdnIcon: IIconCdnStyleConfig;
    }
}

// Icon style default config
export interface IIConStyleDefaultConfig {
  colorDefault: string;
  lucideStyleDefault: {
    size: number;
    strokeWidth: number;
  };
  hugeStyleDefault: {
    'font-size': string;
    'font-weight': string;
  };
}
// Icon resolved icon style
export type IResolvedIconStyle = IIConStyleDefaultConfig;

//====== Icon tokens value ======//
// Icon size token config
export type TIconSizeToken = 'xs' | 'sm' | 'md' | 'lg';

// Icon stroke width token config
export type TIconStrokeWidthToken = TIconSizeToken;

// Bundled icon size token value
export const BUNDLED_ICON_SIZE_TOKEN_VALUE = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
} as const

// Bundled icon stroke width token value
export const BUNDLED_ICON_STROKE_WIDTH_TOKEN_VALUE = {
    xs: 1,
    sm: 1.5,
    md: 2,
    lg: 2.5,
} as const

// CDN icon size token value
export const CDN_ICON_SIZE_TOKEN_VALUE = {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '28px'
} as const

// CDN icon stroke width token value
export const CDN_ICON_STROKEWIDTH_TOKEN_VALUE = {
    xs: '300',
    sm: '400',
    md: '500',
    lg: '600',
} as const
