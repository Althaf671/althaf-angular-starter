export interface IModalItemsConfig {
    title: string;
    description?: string;
    form?: any;
    type: "info" | "actions";
    action?: "submit" | "continue" | "delete";
}