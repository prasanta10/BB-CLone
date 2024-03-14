import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { AllProductsComponent } from './pages/website/all-products/all-products.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'shop',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LandingComponent,
        children:[
           {  
            path:'shop',
            component:AllProductsComponent
            },
            {
                path:'products/:id',
                component:CategoryProductsComponent
            },
           
        ]
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component: ProductsComponent
            },
        ]
    }
];
