import { ShieldUser } from "lucide-angular";
import { IIconMapConfig } from "../../common/models/icon.map.model";
import { ICON_METADATA_PORTAL } from "../../common/models/icon.metadata.model";
import { SHORTENED_BUNDLED_STYLE_CONFIG, SHORTENED_CDN_STYLE_CONFIG } from "../../common/styles/shortened.style.default";

export const SIDEBAR_SYSADMIN_ICON_CONFIG: IIconMapConfig[] = [
    {
        name: 'sys-admin-icon',
        metadata: { portal :"system-admin", page: ICON_METADATA_PORTAL["system-admin"][0] },
        provider: {
            bundledIcon: { icon: ShieldUser, style: SHORTENED_BUNDLED_STYLE_CONFIG },
            cdnIcon: { icon: 'hgi hgi-stroke hgi-microsoft-admin', style: SHORTENED_CDN_STYLE_CONFIG }
        }
    },
]