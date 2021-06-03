import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isLoggedIn:any;
  userInfo:any = {};
  justLogged:boolean = false;
  user:any = {};
  userName:any;
  failedLog:boolean = false;
  loading:any;
  
  constructor(private apiSer: ApiService, private router: Router, private toastSer: ToastService) { }

  userSignup(_bodyData:any):void{
    //send name, email, password
    let url = `${this.apiSer.ApiUrl}/users/signup`;
    this.apiSer.postRequest(url, _bodyData).subscribe((res: any) => {
      console.log(res);
    }, (rej:any)=>{
      if(rej.error.code == 11000){
        alert("email already exist in the system")
      }      
    })
  }

   userLogin(_bodyData:any){
     this.userName = ""
    //send email, password
     let url = `${this.apiSer.ApiUrl}/users/login`;
    this.apiSer.postRequest(url, _bodyData).subscribe((res: any) => {
      console.log(res);
      res.isLogged = true;
      _bodyData.checked = true;
     localStorage.setItem("token", res.token);  
     this.user = res;
      this.toastSer.showSuccess("You have successfully logged in", "Welcome back!");
      setTimeout(() => {
        this.router.navigate(['/userinfo']);
    }, 1000); 
    }, (rej:any)=>{
      this.failedLog = true;
      this.toastSer.showError("Please try again", "Something went wrong");
    })

  }

  returnJustLogged():any{
    return this.justLogged;
  }

  getInfo(){
    let url = `${this.apiSer.ApiUrl}/users/userinfo`;
    this.apiSer.getHeader(url).subscribe((res:any)=>{
      for(let key in res){
        this.userInfo[key] = res[key];
        this.userInfo.createdAt = new Date(this.userInfo.createdAt).toDateString();
       
      }
      console.log(res)
      this.userName = `Hello ${res.name}!`;
    },
    (rej:any)=>{
      if(localStorage["token"]){
        localStorage.removeItem("token");
        alert("session expired. Please log in")
        this.router.navigate(['/login'])
      }
      console.log("the rej is: " + rej)
    })
  }

  logOut():void{
    localStorage.removeItem("token")
    this.router.navigate(['/login'])
  }
}
