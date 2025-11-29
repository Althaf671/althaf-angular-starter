import { Routes } from "@angular/router";

export const operationsRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.route').then(r => r.adminOperationsRoutes)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.route').then(r => r.staffOperationsRoutes)
    }
    // **
]