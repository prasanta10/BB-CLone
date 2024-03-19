import { Component , Input, inject} from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
 @Input() productList: any[]=[];
 cartProducts: any[]=[];

 httpSrv= inject(HttpService);

 cartProductObj: any={
  customerId:"007",
  productId:"",
  productName:"",
  productImageUrl:"",
  quantity:1,
  productPrice:0
 }

 ngOnInit(){
  this.getAllCartItems();
 }

 getAllCartItems(){
  this.httpSrv.getcartProducts().subscribe((res:any)=>{
    this.cartProducts=res;
    console.log(this.cartProducts);
  })
 }

 addToCart(product:any){
  
  this.cartProductObj.productId=product.productId;
  this.cartProductObj.productName=product.productName;
  this.cartProductObj.productPrice=product.productPrice;
  this.cartProductObj.productImageUrl=product.productImageUrl;
  this.httpSrv.addProductToCart(this.cartProductObj).subscribe((res:any)=>{
    console.log(`Added product to cart ${product.productName}`);
  })
}
}
