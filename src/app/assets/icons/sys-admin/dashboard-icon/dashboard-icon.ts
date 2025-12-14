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
import { IIconMapConfig } from "../../common/models/icon.map.model";
import { 
    SHORTENED_HUGE_STYLE_CONFIG, 
    SHORTENED_LUCIDE_STYLE_CONFIG 
} from "../../common/styles/shortened.style.default";

export const DASHBOARD_OVERVIEW_ICONS_CONFIG: IIconMapConfig[] = [
    {
        name: 'metric-total-profit',
        provider: {
            lucideIcon: { icon: CircleDollarSign, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'metric-total-sales',
        provider: {
            lucideIcon: { icon: Box, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'metric-total-client',
        provider: {
            lucideIcon: { icon: UserRound, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'metric-total-active-users',
        provider: {
            lucideIcon: { icon: UserCheck, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'metric-total-active-users',
        provider: {
            lucideIcon: { icon: UserCheck, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'chart-header-icon',
        provider: {
            lucideIcon: { icon: ChartArea, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'chart-pie-icon',
        provider: {
            lucideIcon: { icon: ChartPie, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'summary-header-icon',
        provider: {
            lucideIcon: { icon: Book, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
    {
        name: 'top-employee-header-icon',
        provider: {
            lucideIcon: { icon: Spotlight, style: SHORTENED_LUCIDE_STYLE_CONFIG },
            hugeIcon: { icon: '', style: SHORTENED_HUGE_STYLE_CONFIG }
        }
    },
]