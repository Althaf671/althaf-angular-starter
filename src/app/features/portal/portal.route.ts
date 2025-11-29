import { Routes } from "@angular/router";

export const portalRoutes: Routes = [
    {
        path: 'system-administrator',
        loadChildren: () => import('./sys-admin/pages/sysAdmin.route').then(r => r.administrationPages)
    },
    {
        path: 'finance',
        loadChildren: () => import('./finance/finance.route').then(r => r.financeRoutes)
    },
    {
        path: 'hr',
        loadChildren: () => import('./hr/hr.route').then(r => r.hrRoutes)
    },
    {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.route').then(r => r.inventoryRoutes)
    },
    {
        path: 'operations',
        loadChildren: () => import('./operations/operation.route').then(r => r.operationsRoutes)
    },
    {
        path: 'support',
        loadChildren: () => import('./support/support.route').then(r => r.supportRoutes)
    },
]