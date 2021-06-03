import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:any = {};
  theDate:any;
  constructor(private userSer: UsersService, private router:Router, private authSer:AuthService) { }

  ngOnInit(): void {
    this.authSer.checkIfToken()
    this.userSer.getInfo()
    this.getUserInfo()
  }

   getUserInfo(){
    this.userInfo =  this.userSer.userInfo;
     console.log(this.userInfo)
  }

}
