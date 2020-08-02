import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor( public router: Router) {}
  canActivate(): boolean {
   let isValid =  localStorage.getItem("user")
     if(isValid) 
       return true;
   return false;
  }
}
