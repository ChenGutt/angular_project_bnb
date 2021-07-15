import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

//checking if token exist in localStorage
  checkIfToken():void{
    if(!localStorage["token"]){
      this.router.navigate(["/login"])
    }
  }
}
