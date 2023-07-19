import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { LandingComponent } from './component/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminpageComponent } from './component/adminpage/adminpage.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
// import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';
import { LandinghomeComponent } from './component/landinghome/landinghome.component';
import { ViewproductComponent } from './component/viewproduct/viewproduct.component';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
import { SearchComponent } from './component/search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    AboutComponent,
    CartComponent,
    LandingComponent,
    AdminpageComponent,
    AddproductComponent,
    // UpdateComponent,
    DeleteComponent,
    LandinghomeComponent,
    ViewproductComponent,
    UpdateproductComponent,
    SearchComponent
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
