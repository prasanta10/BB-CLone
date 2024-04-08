import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../../services/http.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  icon= faAdd;
  categoryList: any[]=[];

  constructor(private category: HttpService){}

  ngOnInit(){
    this.getCategories();
  }

  CategoryForm : FormGroup = new FormGroup({
    categoryId: new FormControl(),
    categoryName: new FormControl('')
  })
  
  getCategories(){
    this.category.getCategories().subscribe((res:any)=>{
      this.categoryList=res;
    })
  }

  addCategory(){
    this.category.addCategories(this.CategoryForm.value).subscribe((res:any)=>{
      this.CategoryForm.reset();
      this.getCategories();
    })
  }

}
