import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductsService} from './components/service/products.service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { BlueColorDirective } from './directives/blue-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartListComponent,
    BlueColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
