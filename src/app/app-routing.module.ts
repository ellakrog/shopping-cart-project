import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';


const routes: Routes = [
  { path: '',redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component : HomeComponent },
  { path: 'cart' , component : CartComponent},
  { path: 'productDetails/:_id', component : ProductDetailsComponent},
  { path: 'productsCat/:_id', component: ProductsByCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
