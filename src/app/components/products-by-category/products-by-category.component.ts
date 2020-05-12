import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';


@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  catProducts : Product[]=[]

  constructor(
    private msg:MessengerService
  ) { }

  ngOnInit(): void {
    this.LoadProductCat();
  }
  LoadProductCat(){
    this.msg.getMsg().subscribe((products: Product[]) => {
    console.log(products)
    this.catProducts=products
   })
  }
}
