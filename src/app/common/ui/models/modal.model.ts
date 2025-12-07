export interface IModalItemsConfig {
    title: string;
    description?: string;
    form?: unknown;
    type: "info" | "actions";
    action?: "submit" | "continue" | "delete";
}