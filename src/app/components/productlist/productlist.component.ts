import { Component, Input, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent {
  @Input() productList: any[] = [];
  cartProducts: any[] = [];

  constructor(private router: Router) {}
  httpSrv = inject(HttpService);
  toastr = inject(ToastrService);

  cartProductObj: any = {
    customerId: '007',
    productId: '',
    productName: '',
    productImageUrl: '',
    quantity: 1,
    productPrice: 0,
  };

  ngOnInit() {
    this.getAllCartItems();
  }

  getAllCartItems() {
    this.httpSrv.getcartProducts().subscribe((res: any) => {
      this.cartProducts = res;
      console.log(this.cartProducts);
    });
  }

  addToCart(product: any) {
    const cart_id = this.cartProducts.find(
      (obj) => obj.productId === product.productId
    );
    if (cart_id) {
      const quant: number = cart_id.quantity + 1;
      const name: string = cart_id.productName;
      this.httpSrv
        .updateCartProduct({ ...cart_id, quantity: quant })
        .subscribe((res: any) => {
          this.toastr.success("Item added to Cart", `${name} Added`)
        });
    } else {
      this.cartProductObj.productId = product.productId;
      this.cartProductObj.productName = product.productName;
      this.cartProductObj.productPrice = product.productPrice;
      this.cartProductObj.productImageUrl = product.productImageUrl;
      this.httpSrv
        .addProductToCart(this.cartProductObj)
        .subscribe((res: any) => {
          this.toastr.success("Item added to Cart", `${product.productName} Added`)
        });
    }
  }
}
