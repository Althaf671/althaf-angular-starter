import { Routes } from "@angular/router";

export const supportRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.route').then(r => r.adminSupportRoutes)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.route').then(r => r.staffSupportRoutes)
    }
    // **
]