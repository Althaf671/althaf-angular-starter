import { IIconItemsConfig, IIconStyleConfig } from "./icon.model";

export interface IMetricCardConfigItems {
    name: string;
    icon: {
        lucideIcon: IIconItemsConfig;
        hugeIcon: {
            icon: string;
            style?: IIconStyleConfig
        };
    };
    metricValue: string;
    valueSymbol?: string;
    percentageRate: 'increase' | 'decrease' | 'neutral';
    detailIcon: {
        lucideIcon: IIconItemsConfig;
        hugeIcon: {
            icon: string;
            style?: IIconStyleConfig
        };
    };
    infoText: string;
}

export interface INotificationCardConfigItems {
    name: string;
    level: "auth" | "info" | "payment";
    status: "read" | "unread" | "archive";
}

