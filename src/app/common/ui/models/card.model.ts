import { IMultiIconConfig } from "./icon.model";

export interface IMetricCardConfigItems {
    name: string;
    mainIcon: IMultiIconConfig;
    metricValue: string;
    valueSymbol?: string;
    percentageRate: 'increase' | 'decrease' | 'neutral';
    detailIcon: IMultiIconConfig;
    badgeIcon: IMultiIconConfig;
    infoText: string;
}

export interface INotificationCardConfigItems {
    name: string;
    level: "auth" | "info" | "payment";
    status: "read" | "unread" | "archive";
}

