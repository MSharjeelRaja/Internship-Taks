
import { addAriaReferencedId } from '@angular/cdk/a11y';
import { Routes } from '@angular/router';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { LoginAuthenticateComponent } from './Components/login-authenticate/login-authenticate.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./Components/login-authenticate/login-authenticate.component').then(
        (m) => m.LoginAuthenticateComponent
      ),
  },
  {
    path: 'admin-home/:name',
    component: AdminHomeComponent,
  },
  {
    path: 'admin-home',
    component:AdminHomeComponent,
  },
  {
    path: 'product/:user',
    component: AllProductsComponent,
  },

 {
  path: 'add-product/:user',
  component: AddProductComponent,
},
 {
    path: 'product/:user',
    component: AllProductsComponent,
  },
];
