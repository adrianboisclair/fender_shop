import { Routes, RouterModule } from "@angular/router";
import {ProductComponent} from "./product/product.component";

const APP_ROUTES:Routes = [
    {path: '', redirectTo: '/category/miscellaneous_parts', pathMatch: 'full'}, // Default route is miscellaneous parts
    {path: 'category/:category', component: ProductComponent},
];
export const routing = RouterModule.forRoot(APP_ROUTES);