import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '/home' } 
];
