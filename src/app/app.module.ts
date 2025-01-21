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
import { ProductCardComponent } from './pages/products/product-card/product-card.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home' },
  { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductCardComponent },
  // {
  //   path: 'home',
  //   loadChildren: (),
  //   canActivate: [authGuard],
  // },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
