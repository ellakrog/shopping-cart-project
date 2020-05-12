import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts=[]
  itemCount = 0

  constructor( 
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
   this.handleSubscribtion()
   this.loadCartItems();
  }

  handleSubscribtion(){
    this.msg.getMsg().subscribe((product:Product) => {
     this.loadCartItems();
    })
  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[]) => {
      console.log(items)
      this.cartProducts=items;
      this.calcItems();
    })
  }
  calcItems() {
    this.itemCount=0;
    this.cartProducts.forEach(item => {
      this.itemCount+=item.qty;
      
    })
  }
}
