import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }


  checkIfToken():void{
    if(!localStorage["token"]){
      this.router.navigate(["/login"])
    }
  }
}
