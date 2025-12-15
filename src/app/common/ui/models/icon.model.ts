import { LucideIconData } from "lucide-angular";

//========== LEGACY ==========//
export interface IIconItemsConfig {
    icon: LucideIconData;
    size: number;
    strokeWidth: number;
    color: string;
}
export interface IIconStyleConfig {
    'font-size': string;
    'color': string;
    'font-weight': string;
}
export interface IMultiIconConfig {
    icons: {
        iconLucide: IIconItemsConfig;
        iconHuge: { icon: string; style?: IIconStyleConfig }
    }
}
//========== END LEGACY =========//

// Lucide icon main config
export interface IIconLucideItemConfig {
    icon: LucideIconData;
    size: number;
    strokeWidth: number;
    color: string;
}
// Lucide icon style config
export type IIconLucideStyleConfig = Omit<IIconLucideItemConfig, 'icon'>;

// Huge icon main config
export interface IIconHugeItemConfig {
    icon: string;
    'font-size'?: string;
    'color'?: string;
    'font-weight'?: string;
}
// Huge icon style config
export type IIconHugeStyleConfig = Omit<IIconHugeItemConfig, 'icon'>;

// Multi provider icon config
export interface IMultiProviderIconConfig {
    provider: {
        lucideIcon: {
            icon: LucideIconData;
            style: IIconLucideStyleConfig;
        },
        hugeIcon: {
            icon: IIconHugeItemConfig['icon'];
            style: IIconHugeStyleConfig;
        }
    }
}
