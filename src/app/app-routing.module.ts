import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';



import { HomeComponent } from './component/home/home.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminpageComponent } from './component/adminpage/adminpage.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
// import { UpdateComponent } from './component/update/update.component';
import { ViewproductComponent } from './component/viewproduct/viewproduct.component';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
import { DeleteComponent } from './component/delete/delete.component';


const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminpageComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'updateProduct',component:UpdateproductComponent},
  {path:'viewproduct', component:ViewproductComponent},
  // {path:'update-product',component:UpdateproductComponent},
  { path: 'update-product/:id', component: UpdateproductComponent },
  {path:'delete-product/:id',component:DeleteComponent},
  {path:'about',component:AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
