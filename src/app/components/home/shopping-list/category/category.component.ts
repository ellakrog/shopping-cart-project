import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category'
import { CategoryService } from 'src/app/services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //saving an array of categories from categoryServices in categoryList var
  categoryList : Category[]=[]

  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.GetCategories();
  }

  GetCategories(){
    this.categoryService.getCategories().subscribe((categories) =>{
      console.log(categories)
      this.categoryList=categories;
    })
  }
}
