import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { IProducts } from '../products';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartProducts: IProducts[] = [];
  totalQuantity: number;
  price: number;
  totalPrice: number;

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.event.subscribe((product) => {
      let index = -1;
      index = this.cartProducts.findIndex(p => p.product_id === product.product_id);
      if (index !== -1) {
        this.cartProducts[index].product_quanity += 1;
      } else if (index === -1) {
        this.cartProducts.push(product);
      }
      this.sum();
    });
  }

  deleteProduct(id) {
    const index = this.cartProducts.findIndex(item => item.product_id === id);
    this.cartProducts.splice(index, 1);
    this.sum();
  }

  sum(): void {
    this.totalQuantity = 0;
    this.price = 0;
    this.totalPrice = 0;
    if (this.cartProducts) {
      this.cartProducts.map((product) => {
        this.totalQuantity += product.product_quanity;
        this.price += product.product_price;
        this.totalPrice +=
          product.product_price * product.product_quanity;
      });
      // for (let i = 0; i < this.cartProducts.length; i++) {
      //   this.totalQuantity += this.cartProducts[i].product_quanity;
      //   this.price += this.cartProducts[i].product_price;
      //   this.totalPrice +=
      //     this.cartProducts[i].product_price * this.cartProducts[i].product_quanity;
      // }
    }
  }
}
