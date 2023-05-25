import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { FlexboxProductComponent } from './components/flexbox-product/flexbox-product.component';
import { HomePageDataComponent } from './components/home-page-data/home-page-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    WishlistComponent,
    CartComponent,
    ProductsComponent,
    ProductComponent,
    FlexboxProductComponent,
    HomePageDataComponent,
    PageNotFoundComponent,
    CategoryComponent,
    ProductDetailsComponent,
    SearchComponent,
    ProductCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
