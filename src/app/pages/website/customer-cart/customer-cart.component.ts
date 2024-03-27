import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.scss'
})
export class CustomerCartComponent {
 customer_cart: any[] =[];
 totalPrice: number=0;
 icon= faTrashCan;

 httpSrv= inject(HttpService);
 
 ngOnInit(){
  this.getCartProducts();
 }

 getCartProducts(){
  this.httpSrv.getcartProducts().subscribe((res:any)=>{
    this.customer_cart=res;
    this.totalSummary();
  })
 }

 totalSummary(){
  this.totalPrice=this.customer_cart.reduce((p, c) : number=>{
    const eachprice= parseInt(c.productPrice);
    const quant= c.quantity;
    return p+(eachprice*quant);
  },0);
  console.log(this.totalPrice);
 }

 deleteFromCart(id:any){
  this.httpSrv.deleteCartProduct(id).subscribe((res:any)=>{
    this.getCartProducts();
  })
 }
}
