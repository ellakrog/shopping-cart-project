import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-cat-products-name',
  templateUrl: './cat-products-name.component.html',
  styleUrls: ['./cat-products-name.component.css']
})
export class CatProductsNameComponent implements OnInit {
  
@Input() productCatItem: Product

  constructor(
   
  ) { }

  ngOnInit(): void {
    
  }
  


}
