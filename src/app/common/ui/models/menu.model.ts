import { UiIcons } from "../ui-icons/ui-icons";

export type TMenuConfig = {
    route?: string;
    icon: any;
    text: string;
    action?: () => void;
}[]