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



