import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard/administration/home', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.route').then(r => r.dashboardRoutes)
    }
];
