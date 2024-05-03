import { Routes } from "@angular/router";

const homeRoutes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "",
        loadComponent: () => import("./new-feeds/new-feeds.component").then((m) => m.NewFeedsComponent)
    }
]

export default homeRoutes;