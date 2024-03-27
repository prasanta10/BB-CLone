import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get("http://localhost:3000/categories")
  }

  getAllProducts(){
    return this.http.get("http://localhost:3000/products")
  }

  addProduct(product: any){
    return this.http.post("http://localhost:3000/products",product)
  }

  updateProduct(product: any){
    return this.http.put(`http://localhost:3000/products/${product.productId}`,product)
  }

  deleteProduct(id: any){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  addProductToCart(obj:any){
    return this.http.post("http://localhost:3000/cart",obj);
  }

  getcartProducts(){
    return this.http.get("http://localhost:3000/cart");
  }

  updateCartProduct(cartObj: any){
    return this.http.put(`http://localhost:3000/cart/${cartObj.id}`,cartObj)
  }

  deleteCartProduct(id: any){
    return this.http.delete(`http://localhost:3000/cart/${id}`);
  }
}
