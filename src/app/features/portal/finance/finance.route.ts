import { Routes } from "@angular/router";

export const financeRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.route').then(r => r.adminFinanceRoutes)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.route').then(r => r.staffFinanceRoutes)
    },
    // **
]