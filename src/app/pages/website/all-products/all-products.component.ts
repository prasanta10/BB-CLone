import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  productList: any[]=[];

  httpSrv= inject(HttpService);
 
  ngOnInit(){
   this.getAllProducts();
  }
 
  getAllProducts(){
   this.httpSrv.getAllProducts().subscribe((res:any)=>{
     this.productList=res;
   })
  }
 
}
