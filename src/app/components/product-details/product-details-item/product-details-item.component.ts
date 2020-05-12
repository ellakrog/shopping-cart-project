import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details-item',
  templateUrl: './product-details-item.component.html',
  styleUrls: ['./product-details-item.component.css']
})
export class ProductDetailsItemComponent implements OnInit {
  
  @Input() productItem:Product
  constructor( ) { }

  ngOnInit(): void {
  }

}
