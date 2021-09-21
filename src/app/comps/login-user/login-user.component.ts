import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit, DoCheck {
  @ViewChild("f") myForm: any;
  justLogged = false;
  failedlog = false;
  loading = false;
  submitClicked = false;
  constructor(private userSer: UsersService, private router: Router, private toastSer: ToastService) { }

  ngOnInit(): void {
    this.userSer.loading = this.loading;

  }

  //checking if the member has logged in by the existance of token in localStorage and changing boolean properties accordingly. 

  ngDoCheck(): void {
    if (localStorage["token"]) {
      this.justLogged = true;
      this.loading = true;
    } else {
      this.justLogged = false;
      this.failedlog = this.userSer.failedLog;
      this.loading = false;
    }
  }

  onSub() {
    this.submitClicked = true;
    this.loading = true;
    if (this.myForm.form.status == "INVALID") {
      this.toastSer.showError("Please try again", "Something went wrong");
    }
    else {
      this.userSer.userLogin(this.myForm.form.value)
      this.loading = true;
      this.userSer.myForm = this.myForm;

    }
  }

}




