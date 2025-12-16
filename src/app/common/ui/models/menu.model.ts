// import { IIconItemsConfig } from "./icon.model";

export interface IMenuItemsConfig {
    route?: string;
    // icon: IIconItemsConfig;
    text: string;
    action?: () => void;
};