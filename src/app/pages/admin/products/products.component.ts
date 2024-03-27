import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  toggleFlag : boolean = false;
  editFlag: boolean =false;
  categoryList: any[] = [];
  allProductList: any[]=[];
  productObj : any = {
    "productId":"",
    "productName": "",
    "productPrice": 0,
    "productDescription":"",
    "createdAt":new Date(),
    "categoryId":0,
    "productImageUrl":"",
  }

  httpSrv= inject(HttpService);

  ngOnInit(){
    this.httpSrv.getCategories().subscribe((res:any)=>{
      this.categoryList=res;
    })
    this.getProducts();
  }

  addProduct(){
    console.log(this.productObj);
    this.httpSrv.addProduct(this.productObj).subscribe((res:any)=>{
      console.log("Product Added!")
      this.getProducts();
      this.productObj.reset();
    })
  }

  getProducts(){
    this.httpSrv.getAllProducts().subscribe((res:any)=>{
      this.allProductList=res;
      console.log(this.allProductList);
    })
  }

  editProduct(product: any){
    this.toggleFlag=true;
    this.productObj=product;
    this.productObj.productId=product.id;
    console.log(this.productObj.productId);
    this.editFlag=true;
  }

  editProducts(){
    this.httpSrv.updateProduct(this.productObj).subscribe((res: any)=>{
      alert("Product Edited")
      this.getProducts();
    this.toggleFlag=false;
    this.editFlag=false;
    this.productObj.reset();
    })
  }

  deleteProduct(id :any){
    this.httpSrv.deleteProduct(id).subscribe((res:any)=>{
      this.getProducts();
    })
  }

  onToggle(){
    this.toggleFlag=!this.toggleFlag;
  }
}
