import { Routes } from "@angular/router";

export const staffOperationsRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(c => c.Home)
    },
    // **
]