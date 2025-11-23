import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
    {
        path: 'administration',
        loadChildren: () => import('./admin/pages/admin.route').then(r => r.administrationPages)
    }
]