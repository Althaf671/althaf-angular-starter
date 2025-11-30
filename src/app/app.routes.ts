import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/portal/sys-administration/home', pathMatch: 'full' },
    {
        path: 'portal',
        loadChildren: () => import('./features/portal/portal.route').then(r => r.portalRoutes)
    }
];
