import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ProductlistComponent } from '../../../components/productlist/productlist.component';

@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.scss',
    imports: [ProductlistComponent]
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
