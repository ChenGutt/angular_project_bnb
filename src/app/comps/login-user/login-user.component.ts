import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { indexOf } from 'lodash';
import { ToastService } from 'src/app/services/toast.service';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit, DoCheck{
  @ViewChild("f") myForm: any;
  justLogged:boolean = false;
  failedlog:boolean = false;
  loading:boolean = false;
  constructor(private userSer: UsersService, private router: Router, private toastSer: ToastService) { }

  ngOnInit(): void {
  this.userSer.loading = this.loading;

  }

  ngDoCheck(): void {
    if (localStorage["token"]) {
      this.justLogged = true;
      this.loading = true;
      console.log(this.justLogged)

    } else {
      this.justLogged = false;
     this.failedlog = this.userSer.failedLog;
      this.loading = false;
      console.log(this.justLogged)
    }
  }

  onSub() {
    console.log(this.myForm.form.value);
    if (this.myForm.form.status == "VALID") {
      this.userSer.userLogin(this.myForm.form.value)
      this.loading = true;
     // this.myForm.form.value.checked;
     this.userSer.myForm = this.myForm;

    }
     }

     }
     
  
   

