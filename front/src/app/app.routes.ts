import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { viewGuard } from './guards/view.guard';
import { editGuard } from './guards/edit.guard';

import { adminGuard } from './guards/admin.guard';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ProfileMainComponent } from './components/users/profile-main/profile-main.component';

import { RecipeComponent } from './components/products/list-products/recipe/recipe.component';
import { ListMealsComponent } from './components/meals/list-meals/list-meals.component';
import { NewMealsComponent } from './components/meals/new-meals/new-meals.component';

export const routes: Routes = [
    {path:"products/list", component:ListProductsComponent},
    {path:"products/new", component:NewProductComponent, canActivate:[viewGuard]},
    {path:"products/:id", component:UpdateProductComponent, canActivate:[viewGuard]},
    {path:"products/list/recipe/:id", component:RecipeComponent},

    
    
    
    {path:"auth/signin", component:SigninComponent},
    {path:"auth/login", component:LoginComponent},
    
       {   
        path:"users/list",
        component:ListUsersComponent,
        canActivate:[adminGuard] 
    },
    {
        path:"users/:id",
        component:UpdateUserComponent,
        canActivate:[adminGuard]
    },
  
    {
        path:"profile/main",
        component:ProfileMainComponent
    },
    {
        path:"profile",
        component:ProfileComponent
    },
 
 {path:"meals/list", component:ListMealsComponent},
    {path:"meals/new", component:NewMealsComponent, canActivate:[viewGuard]},
 
    {path:"", component:HomePageComponent},
   
    
];