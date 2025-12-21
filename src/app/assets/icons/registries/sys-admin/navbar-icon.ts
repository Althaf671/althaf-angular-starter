import { 
    Boxes,
    Headset, 
    Landmark, 
    LayoutDashboard, 
    ShieldUser, 
    UserPlus
} from "lucide-angular";
import { IIconMapConfig } from "../../common/models/icon.map.model";
import { SHORTENED_BUNDLED_STYLE_CONFIG, SHORTENED_CDN_STYLE_CONFIG } from "../../common/styles/shortened.style.default";
import { ICON_METADATA_PORTAL } from "../../common/models/icon.metadata.model";

export const NAVBAR_SYSADMIN_DASHBOARD_ICON_CONFIG: IIconMapConfig[] = [
    {
        name: 'sys-admin-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: ShieldUser, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-microsoft-admin', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'finance-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: Landmark, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-bank', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'hr-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: UserPlus, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-bank', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'inventory-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: Boxes, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-warehouse', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'operational-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: LayoutDashboard, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-flow', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
    {
        name: 'support-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: Headset, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-customer-support', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
]