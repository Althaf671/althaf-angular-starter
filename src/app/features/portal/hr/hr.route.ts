import { Routes } from "@angular/router";

export const hrRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.route').then(r => r.adminHRRoutes)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.route').then(r => r.staffHRRoutes)
    }
    // **
]