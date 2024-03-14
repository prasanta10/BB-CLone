import { Component} from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss'
})
export class CategoryProductsComponent {
  categoryProductList: any[]=[];
  activeCategoryId: number=0;

  constructor(private activatedRoute: ActivatedRoute, private httpSrv: HttpService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.activeCategoryId=res.id;
      this.loadProducts();
    })
  }

  loadProducts(){
    this.httpSrv.getAllProducts().subscribe((res:any)=>{
      this.categoryProductList=res.filter((x:any)=>x.categoryId ===this.activeCategoryId);
    })
  }
}
