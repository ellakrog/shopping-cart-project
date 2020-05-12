import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productItemD : Product
  product_id = this.activatedRoute.snapshot.paramMap.get('_id');

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
   this.getProductItemDetails()
  }

  
getProductItemDetails(){
  this.productService.getProductById(this.product_id).subscribe((product:Product ) => {
    console.log(product)
  this.productItemD=product
  console.log(this.productItemD)
  })
}

}
