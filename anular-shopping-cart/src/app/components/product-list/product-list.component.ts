import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../service/products.service';
import {IProducts} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { 
  products:IProducts[];
  constructor(private _productsService:ProductsService) { }

  ngOnInit() {
    this.products = this._productsService.getProducts();
  }
  addToCart(product): void {
    this._productsService.event.emit(product);   
  }
  view(product:IProducts){
    alert(product.product_details)
  }

}
