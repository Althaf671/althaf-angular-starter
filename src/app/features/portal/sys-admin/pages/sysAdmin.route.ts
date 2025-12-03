import { Routes } from "@angular/router";

export const administrationPages: Routes = [
    {
        path: 'home',
        title: 'Home • Admin',
        loadComponent: () => import('./home/home').then(c => c.Home),
        data: { breadcrumbs: 'Home' },
        children: [
            { 
                path: 'inner',
                title: 'Inner page',
                loadComponent: () => import('./home/inner/inner').then(cc => cc.Inner),  // cc = child component
                data: { breadcrumbs: 'Child' },
                children: [
                    {
                        path: 'grand',
                        loadComponent: () => import('./home/inner/grand/grand').then(gc => gc.Grand),
                        data: { breadcrumbs: 'GrandChild' }
                    }
                ]
            }
        ]
    },
    {
        path: 'finance',
        title: 'Finance Dashboard • Admin',
        loadComponent: () => import('./finance/finance').then(c => c.Finance),
        data: { breadcrumbs: 'Finance' }
    },
    {
        path: 'monitoring',
        title: 'Health Monitor • Admin',
        loadComponent: () => import('./health/health').then(c => c.Health),
        data: { breadcrumbs: 'Monitoring' }
    },
    {
        path: 'settings',
        title: 'Setting Panel • Admin',
        loadComponent: () => import('./setting/setting').then(c => c.Setting),
        data: { breadcrumbs: 'Settings' }
    },
]