import { 
    // AppWindow, 
    // ContactRound, 
    // DoorOpen, 
    FileCog, 
    Gauge, 
    // Inbox, 
    // Landmark, 
    // ListChecks, 
    Settings, 
    SquareActivity, 
    ToolCase,
} from "lucide-angular";

export const SIDEBAR_HEADER_ITEMS = { 
    portalName: 'System Admin', 
    email: 'sysadmin@gmail.com' 
}

export const SIDEBAR_PRIMARY_MENU_ITEMS = [
    { 
        icon: { 
            icon: Gauge, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 21
        },
        route: '/portal/system-administrator/home',
        name: 'Overview' 
    },
]

export const SIDEBAR_SECONDARY_MENU_ITEMS = [
    { 
        icon: { 
            icon: ToolCase, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 21
        },
        route: '/portal/system-administrator/', 
        name: 'Tools' 
    },
    { 
        icon: { 
            icon: FileCog, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 21
        },
        route: '/portal/system-administrator/', 
        name: 'File Manager' 
    },
]

export const SIDEBAR_THIRD_MENU_ITEMS = [
    { 
        icon: { 
            icon: SquareActivity, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 21
        },
        route: '/portal/system-administrator/',  
        name: 'Monitoring' 
    },
    { 
        icon: { 
            icon: Settings, 
            strokeWidth: 1.5,
            color: 'var(--color-icon)', 
            size: 21
        },
        route: '/portal/system-administrator/', 
        name: 'Settings' 
    },
]