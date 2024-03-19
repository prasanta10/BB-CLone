import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.scss'
})
export class CustomerCartComponent {
 customer_cart: any[] =[];
 totalPrice: number=0;

 httpSrv= inject(HttpService);
 
 ngOnInit(){
  this.httpSrv.getcartProducts().subscribe((res:any)=>{
    this.customer_cart=res;
    this.totalSummary();
  })
 }

 totalSummary(){
  this.totalPrice=this.customer_cart.reduce((p, c) : number=>{
    const eachprice= parseInt(c.productPrice);
    return p+eachprice;
  },0);
  console.log(this.totalPrice);
 }
}
