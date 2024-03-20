import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn= inject(LoginService);
  const router= inject(Router);

  if(!isLoggedIn.isLoggedIn()){
    return router.navigate(['/shop']);
  }else{
    return true;
  }
};
