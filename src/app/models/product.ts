import { Category } from './category';

export class Product {
    _id: string;
    name:string;
    desc:string;
    price: number;
    imageUrl: string;
    category_id: string;
    category_name: string;
    
    constructor(_id:string, name:string, desc:string, price: number, imageUrl:string , category: Category){
        this._id= _id,
        this.name=name,
        this.desc=desc,
        this.price=price,
        this.imageUrl=imageUrl,
        this.category_id=category._id,
        this.category_name = category.name
    }
}
