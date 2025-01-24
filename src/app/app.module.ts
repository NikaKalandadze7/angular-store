import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsModule } from './pages/products/products.module';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { CartModule } from './pages/cart/cart.module';
import { ContactModule } from './pages/contact/contact.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthModule } from './pages/auth/auth.module';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ProductsModule,
    CartModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    ContactModule,
    AuthModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
