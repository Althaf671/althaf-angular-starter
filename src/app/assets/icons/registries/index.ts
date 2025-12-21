/**
 * registry - uh basically the dashboard-admin-icon
 * a declarative list of available icons for a scope
 * must tell an icon esists under 'name', with icon providers and metadata
 * it aint do anything except as a data list to be indexed
 * must contain collection of IIConMapConfig entries:
 * name AKA the selector,
 * metadata such as portal name or page name for indexing
 */

import { NAVBAR_SYSADMIN_DASHBOARD_ICON_CONFIG } from "./sys-admin/navbar-icon";
import { SIDEBAR_SYSADMIN_ICON_CONFIG } from "./sys-admin/sidebar-icon";
import { 
    DASHBOARD_FINANCE_ICONS_CONFIG, 
    DASHBOARD_HR_ICONS_CONFIG, 
    DASHBOARD_INVENTORY_ICONS_CONFIG, 
    DASHBOARD_OPERATIONS_ICONS_CONFIG, 
    DASHBOARD_OVERVIEW_ICONS_CONFIG, 
    DASHBOARD_SUPPORT_ICONS_CONFIG
} from "./sys-admin/dashboard-icon";
import { GLOBAL_ICON_CONFIG } from "./common/global-icon";

// i can separate any of them later if needed
export const GLOBAL_ICON_REGISTRY = [ GLOBAL_ICON_CONFIG ]

export const SYS_ADMIN_ICON_REGISTRY = [
    DASHBOARD_OVERVIEW_ICONS_CONFIG, DASHBOARD_FINANCE_ICONS_CONFIG,
    DASHBOARD_HR_ICONS_CONFIG, DASHBOARD_INVENTORY_ICONS_CONFIG,
    DASHBOARD_OPERATIONS_ICONS_CONFIG, DASHBOARD_SUPPORT_ICONS_CONFIG,
    NAVBAR_SYSADMIN_DASHBOARD_ICON_CONFIG, SIDEBAR_SYSADMIN_ICON_CONFIG
] as const

export const FINANCE_ICON_REGISTRY = [] as const

export const HR_ICON_REGISTRY = [] as const

export const INVENTORY_ICON_REGISTRY = [] as const

export const OPERATIONAL_ICON_REGISTRY = [] as const

export const SUPPORT_ICON_REGISTRY = [] as const