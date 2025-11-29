import { Routes } from "@angular/router";

export const administrationPages: Routes = [
    {
        path: 'home',
        title: 'Home • Admin',
        loadComponent: () => import('./home/home').then(c => c.Home),
    },
    {
        path: 'finance',
        title: 'Finance Dashboard • Admin',
        loadComponent: () => import('./finance/finance').then(c => c.Finance),
    },
    {
        path: 'health',
        title: 'Health Monitor • Admin',
        loadComponent: () => import('./health/health').then(c => c.Health),
    },
    {
        path: 'setting',
        title: 'Setting Panel • Admin',
        loadComponent: () => import('./setting/setting').then(c => c.Setting),
    },
]