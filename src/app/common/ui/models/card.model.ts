import { IIconItemsConfig } from "./icon.model";

export interface IMetricCardConfigItems {
    name: string;
    icon: IIconItemsConfig;
    metricValue: number;
    valueSymbol: string;
    percentageRate: 'increase' | 'decrease' | 'neutral';
    detailIcon: IIconItemsConfig;
    infoText: string;
}

export interface INotificationCardConfigItems {
    name: string;
    level: "auth" | "info" | "payment";
    status: "read" | "unread" | "archive";
}

