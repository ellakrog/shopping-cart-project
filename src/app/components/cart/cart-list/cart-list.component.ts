import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartItems : CartItem[] = []
  cartTotal = 0;

  constructor(
    private cartService : CartService,

  ) { }

  ngOnInit(): void {
    this.DisplayCartItems();
  }

  DisplayCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      console.log(items)
      this.cartItems = items;
      this.calcCartTotal();
    })
  }
  calcCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
    })
  }
}
