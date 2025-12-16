import { TSidebarMenuItemsConfig } from "@/app/common/layout";
import { 
    // ChartArea,
    // AppWindow, 
    // ContactRound, 
    // DoorOpen, 
    // FileCog, 
    // Gauge, 
    // IdCardLanyard, 
    // Inbox, 
    // Inbox, 
    // ListTodo, 
    // ListChecks, 
    // Settings, 
    // SquareActivity, 
    // ToolCase,
} from "lucide-angular";


export const SIDEBAR_HEADER_ITEMS = { 
    portalName: 'System Admin', 
    email: 'sysadmin@gmail.com' 
}

export const SIDEBAR_PRIMARY_MENU_ITEMS: TSidebarMenuItemsConfig = [
    { 
        // iconLucide: { 
        //     icon: Gauge, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-dashboard-speed-02',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/home',
        name: 'Dashboard' 
    },
    { 
        // iconLucide: { 
        //     icon: ChartArea, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-analytics-02',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/analytic',
        name: 'Analytics' 
    },
    { 
        // iconLucide: { 
        //     icon: ChartArea, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-user-group',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/analytic',
        name: 'Client' 
    },
    { 
        // iconLucide: { 
        //     icon: IdCardLanyard, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-id',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finacnce',
        name: 'Employee' 
    },
]

export const SIDEBAR_SECONDARY_MENU_ITEMS: TSidebarMenuItemsConfig = [
    { 
        // iconLucide: { 
        //     icon: FileCog, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-hierarchy-files',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance', 
        name: 'Project' 
    },
    { 
        // iconLucide: { 
        //     icon: ListTodo, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-task-daily-01',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance',
        name: 'Task' 
    },
    { 
        // iconLucide: { 
        //     icon: FileCog, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-calendar-03',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance', 
        name: 'Scheduler' 
    },
    { 
        // iconLucide: { 
        //     icon: FileCog, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-folder-file-storage',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance', 
        name: 'File Manager' 
    },
    { 
        // iconLucide: { 
        //     icon: Inbox, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-inbox',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance',
        name: 'Inbox' 
    },
    { 
        // iconLucide: { 
        //     icon: ToolCase, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-tools',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance', 
        name: 'Tools' 
    },
]


export const SIDEBAR_THIRD_MENU_ITEMS: TSidebarMenuItemsConfig = [
    { 
        // iconLucide: { 
        //     icon: SquareActivity, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-activity-03',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance',  
        name: 'Monitoring' 
    },
    { 
        // iconLucide: { 
        //     icon: Settings, 
        //     strokeWidth: 1.5,
        //     color: 'var(--color-icon)', 
        //     size: 24
        // },
        // iconHuge: {
        //     icon: 'hgi hgi-stroke hgi-settings-01',
        //     style: {
        //         'font-size':' 24px', 
        //         'color': 'var(--color-icon)', 
        //         'font-weight': '500'
        //     }
        // },
        route: '/portal/system-administrator/finance', 
        name: 'Settings' 
    },
]