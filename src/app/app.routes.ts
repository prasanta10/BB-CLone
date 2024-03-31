import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { AllProductsComponent } from './pages/website/all-products/all-products.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { authGuard } from './guards/auth.guard';
import { CategoriesComponent } from './pages/admin/categories/categories.component';

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
            {
                path:'cart',
                component: CustomerCartComponent
            }
           
        ]
    },
    {
        path:'',
        component:LayoutComponent,
        canActivate:[authGuard],
        children:[
            {
                path:'products',
                component: ProductsComponent,
                canActivate:[authGuard],
            },
            {
                path:'categories',
                component: CategoriesComponent,
            }
        ]
    }
];
