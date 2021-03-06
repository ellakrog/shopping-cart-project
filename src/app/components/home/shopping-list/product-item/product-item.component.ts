import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product


  constructor( 
    private cartService: CartService,
    private msg: MessengerService,
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  hanleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      console.log(this.productItem)
      this.msg.sendMsg(this.productItem)
    });
  }
  ProductDetails(){
      this.router.navigate(['/productDetails/'+ this.productItem._id]);
  }
}
