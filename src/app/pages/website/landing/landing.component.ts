import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  categoryList: any[]=[];
  showDropDownFlag: boolean=false;
  icon = faCartShopping;

  httpSrv= inject(HttpService);
  router= inject(Router);

  showDropDown(){
    this.showDropDownFlag= !this.showDropDownFlag;
    this.httpSrv.getCategories().subscribe((res:any)=>{
      this.categoryList=res;
    })
  }

  displayCategory(id: number){
    this.showDropDownFlag=false;
    this.router.navigate(['products', id])
  }
}
