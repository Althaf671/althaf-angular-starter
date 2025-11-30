import { Routes } from "@angular/router";

export const innerHomeRoutes: Routes = [
    {
        path: 'inner',
        loadComponent: () => import('./inner/inner').then(c => c.Inner),
        data: { breadcrumbs: 'Inner' }
    }
]