import { Routes } from "@angular/router";

export const adminHRRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home').then(c => c.Home)
    },
    // **
]