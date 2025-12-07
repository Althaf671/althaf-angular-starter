import { IMetricCardConfigItems } from "@/app/common/ui";
import { 
    CheckCheck, 
    CircleDollarSign, 
    Info, 
    UserRound, 
    UserRoundCheck 
} from "lucide-angular";

export const totalProfit: IMetricCardConfigItems = {
    icon: { icon: CircleDollarSign, color: 'var(--color-icon)', size: 24, strokeWidth: 2.25 },
    detailIcon: { icon: Info, color: 'var(--color-icon)', size: 20, strokeWidth: 1.5 },
    name: "Total Profit",
    metricValue: 100,
    valueSymbol: "$",
    percentageRate: "increase",
    infoText: "From the Last Month"
}

export const totalUsers: IMetricCardConfigItems = {
    icon: { icon: UserRound, color: 'var(--color-icon)', size: 24, strokeWidth: 2.25 },
    detailIcon: { icon:Info, color: 'var(--color-icon)', size: 20, strokeWidth: 1.5 },
    name: "Total Users",
    metricValue: 100,
    valueSymbol: "$",
    percentageRate: "increase",
    infoText: "From the Last Month"
}

export const totalSuccessTransaction: IMetricCardConfigItems = {
    icon: { icon: CheckCheck, color: 'var(--color-icon)', size: 24, strokeWidth: 2.25 },
    detailIcon: { icon:Info, color: 'var(--color-icon)', size: 20, strokeWidth: 1.5 },
    name: "Total Sales",
    metricValue: 100,
    valueSymbol: "$",
    percentageRate: "increase",
    infoText: "From the Last Month"
}

export const totalActiveUsers: IMetricCardConfigItems = {
    icon: { icon: UserRoundCheck, color: 'var(--color-icon)', size: 24, strokeWidth: 2.25 },
    detailIcon: { icon:Info, color: 'var(--color-icon)', size: 20, strokeWidth: 1.5 },
    name: "Total Active Users",
    metricValue: 100,
    valueSymbol: "$",
    percentageRate: "increase",
    infoText: "From the Last Month"
}