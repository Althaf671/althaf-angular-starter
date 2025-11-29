import { Routes } from "@angular/router";

export const staffInventoryRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home').then(c => c.Home)
    },
    // **
]