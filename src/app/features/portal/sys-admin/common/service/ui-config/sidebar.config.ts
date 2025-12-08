import { TSidebarMenuItemsConfig } from "@/app/common/layout";
import { 
    // AppWindow, 
    // ContactRound, 
    // DoorOpen, 
    FileCog, 
    Gauge, 
    // Inbox, 
    Landmark, 
    // ListChecks, 
    Settings, 
    SquareActivity, 
    ToolCase,
} from "lucide-angular";

export const SIDEBAR_HEADER_ITEMS = { 
    portalName: 'System Admin', 
    email: 'sysadmin@gmail.com' 
}

export const SIDEBAR_PRIMARY_MENU_ITEMS: TSidebarMenuItemsConfig = [
    { 
        iconLucide: { 
            icon: Gauge, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 24
        },
        iconHuge: {
            icon: 'hgi hgi-stroke hgi-dashboard-browsing',
            style: {
                'font-size':' 24px', 
                'color': 'var(--color-icon)', 
                'font-weight': '500'
            }
        },
        route: '/portal/system-administrator/home',
        name: 'Overview' 
    },
    { 
        iconLucide: { 
            icon: Landmark, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 24
        },
        iconHuge: {
            icon: 'hgi hgi-stroke hgi-bank',
            style: {
                'font-size':' 24px', 
                'color': 'var(--color-icon)', 
                'font-weight': '500'
            }
        },
        route: '/portal/system-administrator/home',
        name: 'Finance' 
    },
]

export const SIDEBAR_SECONDARY_MENU_ITEMS: TSidebarMenuItemsConfig = [
    { 
        iconLucide: { 
            icon: ToolCase, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 24
        },
        iconHuge: {
            icon: 'hgi hgi-stroke hgi-tools',
            style: {
                'font-size':' 24px', 
                'color': 'var(--color-icon)', 
                'font-weight': '500'
            }
        },
        route: '/portal/system-administrator/', 
        name: 'Tools' 
    },
    { 
        iconLucide: { 
            icon: FileCog, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 24
        },
        iconHuge: {
            icon: 'hgi hgi-stroke hgi-folder-file-storage',
            style: {
                'font-size':' 24px', 
                'color': 'var(--color-icon)', 
                'font-weight': '500'
            }
        },
        route: '/portal/system-administrator/', 
        name: 'File Manager' 
    },
]

export const SIDEBAR_THIRD_MENU_ITEMS: TSidebarMenuItemsConfig = [
    { 
        iconLucide: { 
            icon: SquareActivity, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 24
        },
        iconHuge: {
            icon: 'hgi hgi-stroke hgi-web-protection',
            style: {
                'font-size':' 24px', 
                'color': 'var(--color-icon)', 
                'font-weight': '500'
            }
        },
        route: '/portal/system-administrator/',  
        name: 'Monitoring' 
    },
    { 
        iconLucide: { 
            icon: Settings, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 24
        },
        iconHuge: {
            icon: 'hgi hgi-stroke hgi-settings-01',
            style: {
                'font-size':' 24px', 
                'color': 'var(--color-icon)', 
                'font-weight': '500'
            }
        },
        route: '/portal/system-administrator/', 
        name: 'Settings' 
    },
]