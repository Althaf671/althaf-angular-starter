import { IIconItemsConfig, IIconStyleConfig } from "./icon.model";

export interface IButtonItemsConfig {
    type: "button" | "submit";
    variant: "text-icon" | "icon-only" | "text-only";
    level: "info" | "warn" | "danger" | "success";
    name: string;
    onclick: () => void;
    icon: {
        iconLucide: IIconItemsConfig
        iconHuge: {
            icon: string;
            style?: IIconStyleConfig
        }
    }
}

export interface IButtonStyle {
    width?: string;
    height?: string;
    color?: string;
    bgColor?: string;
}