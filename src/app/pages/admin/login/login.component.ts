import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private router:Router, private fb: FormBuilder, private loginSrv: LoginService){
    this.loginForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }
  
  onlogin(){
    if(this.loginForm.valid){
      this.loginSrv.login();
      this.router.navigate(['/products'])
    }else{
      this.loginForm.markAllAsTouched();
    }
    }
  }
