import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingListComponent } from './components/home/shopping-list/shopping-list.component';
import { CategoryComponent } from './components/home/shopping-list/category/category.component';
import { CategoryItemComponent } from './components/home/shopping-list/category/category-item/category-item.component';
import { ProductItemComponent } from './components/home/shopping-list/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart/cart-list/cart-item/cart-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/home/shopping-list/shopping-cart/shopping-cart.component';
import { ProductDetailsItemComponent } from './components/product-details/product-details-item/product-details-item.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { CatProductsNameComponent } from './components/products-by-category/cat-products-name/cat-products-name.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingListComponent,
    CategoryComponent,
    ProductItemComponent,
    CartComponent,
    CartListComponent,
    CartItemComponent,
    CategoryItemComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ProductDetailsItemComponent,
    ProductsByCategoryComponent,
    CatProductsNameComponent

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
