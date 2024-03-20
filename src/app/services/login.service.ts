import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(): void{
    localStorage.setItem("token","userLoggedIn");
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
