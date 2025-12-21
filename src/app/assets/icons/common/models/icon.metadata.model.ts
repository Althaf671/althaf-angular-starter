//===== Metadata for icon registry =====//
export interface IIconMetadata {
    portal: 
    "system-admin" 
    | "finance" 
    | "hr" 
    | "inventory" 
    | "operations" 
    | "support";
    page: string;
    tags?: string;
}

export const ICON_METADATA_PORTAL = {
    'system-admin': [
        'dashboard', 'analytic', 'management-client', 
        'management-employee', 'project', 'task',
        'scheduler', 'file-manager', 'inbox',
        'tools', 'monitoring', 'setting'
    ],
    'finance': [], 
    'hr': [],
    'inventory': [],
    'operations': [], 
    'support': []
} as const

export const ICON_METADATA_GLOBAL = "global";


export const ICON_METADATA_TAGS = [

] as const