import { 
    Check,
    CircleAlert,
    Info, 
    TriangleAlert 
} from "lucide-angular";
import { IIconMapConfig } from "../../common/models/icon.map.model";
import { ICON_ACCENT_COLOR_DEFAULT } from "../../common/styles/icon.style.default";
import { 
    useHugeStyleWithAccentColor, 
    useLucideStyleWithAccentColor 
} from "../../common/helper/useAccentStyle";

export const GLOBAL_ICON_CONFIG: IIconMapConfig[] = [
    {
        name: 'info-icon',
        provider: {
            bundledIcon: { 
                icon: Info, 
                style: useLucideStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.info) 
            },
            cdnIcon: { 
                icon: 'hgi hgi-stroke hgi-information-circle', 
                style: useHugeStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.info) 
            }
        }
    },
    {
        name: 'warn-icon',
        provider: {
            bundledIcon: { 
                icon: CircleAlert, 
                style: useLucideStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.warn) 
            },
            cdnIcon: { 
                icon: 'hgi hgi-stroke hgi-alert-circle', 
                style: useHugeStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.warn) 
            }
        }
    },
    {
        name: 'danger-icon',
        provider: {
            bundledIcon: { 
                icon: TriangleAlert, 
                style: useLucideStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.danger) 
            },
            cdnIcon: { 
                icon: 'hgi hgi-stroke hgi-alert-02', 
                style: useHugeStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.danger) 
            }
        }
    },
    {
        name: 'success-icon',
        provider: {
            bundledIcon: { 
                icon: Check, 
                style: useLucideStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.success) 
            },
            cdnIcon: { 
                icon: 'hgi hgi-stroke hgi-tick-02', 
                style: useHugeStyleWithAccentColor(ICON_ACCENT_COLOR_DEFAULT.success) 
            }
        }
    },
]

