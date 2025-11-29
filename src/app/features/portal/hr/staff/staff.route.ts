import { Routes } from "@angular/router";

export const staffHRRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home').then(c => c.Home)
    },
    // **
]