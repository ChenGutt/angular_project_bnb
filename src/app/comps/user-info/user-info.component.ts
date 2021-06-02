import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:any = {};
  theDate:any;
  constructor(private userSer: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.userSer.getInfo()
    this.getUserInfo()
  }

   getUserInfo(){
    this.userInfo =  this.userSer.userInfo;
     console.log(this.userInfo)
  }

}
