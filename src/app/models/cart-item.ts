import { Product } from './product';

export class CartItem {
    _id?: string;
    productId?: string;
    productName?: string;
    productImage?: string;
    qty?: number;
    price?: number;
    user_id?:string;
   
    constructor(_id: string, product: Product, qty = 1) {
      this._id = _id;
      this.productId = product._id;
      this.productName = product.name;
      this.price = product.price;
      this.productImage=product.imageUrl;
      this.user_id= _id;
      this.qty = qty;
    }
}

