import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const   API_URL= 'http://localhost:4000/products/all';
const   ProductId= 'http://localhost:4000/products';
const CatProducts=  'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( 
    private http: HttpClient,
    private router:Router) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(API_URL);
  }

  getProductById(_id:string):Observable<any>{
    console.log(_id)
   return this.http.get<Product[]>(`${ProductId}/details/${_id}`);
  }
  getProductsCatByName(category_name:string): Observable<any> {
    return this.http.get<Product[]>(`${CatProducts}/products/${category_name}`)
    
   }
}
