import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import("./pages/home/home.routes").then((m) => m.default)
    }
];
