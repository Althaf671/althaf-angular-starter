import { Routes } from "@angular/router";

export const adminInventoryRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(c => c.Home)
    },
    // **
]