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
    'font-size'?: string;
    'color'?: string;
    'font-weight'?: string;
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
    color: string;
    strokeWidth: string;
    size: string;
}

// Icon size token config
// export interface IIconSizeTokenConfig {
//     xs: number
//     sm: number;
//     md: number;
//     lg: number;
// }

// Icon size token value
// export const SIZE_TOKEN: IIconSizeTokenConfig = {
//     xs: 16,
//     sm: 20,
//     md: 24,
//     lg: 28
// }

// Icon stroke width token config
// export interface IIConStrokeWidthTokenConfig {
//     thin: number;
//     medium: number;
//     bold: number;
//     bolder: number;
// }

// Icon stroke width token value
// export const STROKE_WIDTH_TOKEN: IIConStrokeWidthTokenConfig = {
//     thin: 1,
//     medium: 1.5,
//     bold: 2,
//     bolder: 2.5
// }

export type TIconSizeToken = 'xs' | 'sm' | 'md' | 'lg';

export type TIconStrokeWidthToken = TIconSizeToken;
