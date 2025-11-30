import { UiIcons } from "../ui-icons/ui-icons";

export type TMenuItemsConfig = {
    route?: string;
    icon: any;
    text: string;
    action?: () => void;
}[]