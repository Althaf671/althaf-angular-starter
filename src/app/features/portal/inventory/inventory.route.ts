import { Routes } from "@angular/router";

export const inventoryRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.route').then(r => r.adminInventoryRoutes)
    },
    {
        path: 'staff',
        loadChildren: () => import('./staff/staff.route').then(r => r.staffInventoryRoutes)
    },
    // **
]