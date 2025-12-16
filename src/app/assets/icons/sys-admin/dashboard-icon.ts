import { 
    Book,
    Box, 
    ChartArea, 
    ChartPie, 
    CircleDollarSign, 
    Spotlight, 
    UserCheck, 
    UserRound 
} from "lucide-angular";
import { IIconMapConfig } from "../common/models/icon.map.model";
import { 
    SHORTENED_CDN_STYLE_CONFIG, 
    SHORTENED_BUNDLED_STYLE_CONFIG 
} from "../common/styles/shortened.style.default";

export const DASHBOARD_OVERVIEW_ICONS_CONFIG: IIconMapConfig[] = [
    {
        name: 'metric-total-profit',
        provider: {
            bundledIcon: { icon: CircleDollarSign, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-dollar-02', style: SHORTENED_CDN_STYLE_CONFIG },
        }
    },
    {
        name: 'metric-total-sales',
        provider: {
            bundledIcon: { icon: Box, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-package-delivered', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'metric-total-client',
        provider: {
            bundledIcon: { icon: UserRound, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-user-group', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'metric-total-employee',
        provider: {
            bundledIcon: { icon: UserCheck, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-id', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'chart-bar-icon',
        provider: {
            bundledIcon: { icon: ChartArea, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-waterfall-up-01', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'chart-pie-icon',
        provider: {
            bundledIcon: { icon: ChartPie, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-pie-chart-09', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'summary-header-icon',
        provider: {
            bundledIcon: { icon: Book, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-document-validation', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'top-employee-header-icon',
        provider: {
            bundledIcon: { icon: Spotlight, style:SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-nerd', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
] 

export const DASHBOARD_FINANCE_ICONS_CONFIG: IIconMapConfig[] = []

export const DASHBOARD_INVENTORY_ICONS_CONFIG: IIconMapConfig[] = []

export const DASHBOARD_HR_ICONS_CONFIG: IIconMapConfig[] = []

export const DASHBOARD_OPERATIONS_ICONS_CONFIG: IIconMapConfig[] = []

export const DASHBOARD_SUPPORT_ICONS_CONFIG: IIconMapConfig[] = []