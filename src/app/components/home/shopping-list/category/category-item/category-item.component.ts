import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
   //geting categories from categoryList var
  @Input() categoryItem: Category

  constructor( private router:Router,
    private productService: ProductService,
    private msg: MessengerService ) { }

  ngOnInit(): void {
  }

  ProductsByCatName(){
    this.productService.getProductsCatByName(this.categoryItem.name).subscribe((products) =>{
      console.log(products)
      this.msg.sendMsg(products)
      this.router.navigate(['/productsCat/'+ this.categoryItem.name]);
  })
  }


}
