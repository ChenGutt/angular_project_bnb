import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isLoggedIn: any;
  userInfo: any = {};
  justLogged: boolean = false;
  user: any = {};
  userName: any;
  failedLog = false;
  loading: any;
  myForm: any;

  constructor(private apiSer: ApiService, private router: Router, private toastSer: ToastService) { }


  //user sign up - requires name, email and Password

  userSignup(_bodyData: any): void {
    let url = `${this.apiSer.ApiUrl}/users/signup`;
    this.apiSer.postRequest(url, _bodyData).subscribe((res: any) => {
      console.log(res);
      this.toastSer.showSuccess("You have signed up successfully!", "Welcome to iStay!")
    }, (rej: any) => {
      if (rej.error.code == 11000) {
        alert("email already exist in the system")
      }
    })
  }

  //user login - requires email and password

  userLogin(_bodyData: any) {
    this.userName = ""
    let url = `${this.apiSer.ApiUrl}/users/login`;
    this.apiSer.postRequest(url, _bodyData).subscribe((res: any) => {
      res.isLogged = true;
      _bodyData.checked = true;

      //saving token to localStorage

      localStorage.setItem("token", res.token);

      //building user object 

      this.user = res;

      //on success
      this.toastSer.showSuccess("You have successfully logged in", "Welcome back!");
      setTimeout(() => {
        this.router.navigate(['/userinfo']);
      }, 1000);
    }, (rej: any) => {

      //on error
      this.failedLog = true;
      this.toastSer.showError("Please try again", "Something went wrong");
    })

  }

  getInfo() {
    let url = `${this.apiSer.ApiUrl}/users/userinfo`;
    this.apiSer.getHeader(url).subscribe((res: any) => {
      console.log(res)
      for (let key in res) {
        this.userInfo[key] = res[key];
        // showing the date in a different format
        this.userInfo.created = new Date(this.userInfo.createdAt).toDateString()

      }
      //showing "hello user" on the navbar as soon as user is successfully logged in
      this.userName = `Hello ${res.name}!`;
    },
      (rej: any) => {
        //upon rejection, remove the token and pop an alert
        if (localStorage["token"]) {
          localStorage.removeItem("token");
          alert("session expired. Please log in")
          this.router.navigate(['/login'])
        }
        console.log("the rej is: " + rej)
      })
  }

  logOut(): void {
    localStorage.removeItem("token")
    this.toastSer.showWarning("You have logged out", "Bye bye")
    this.router.navigate(['/login'])
  }
}
