import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';
import { NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
 isLoggedIn:boolean = false;
 userName:any;
 showDrop: boolean = false;
 mobile:boolean = false;
 classAdded:boolean = false;

  constructor(private userSer: UsersService, private router: Router, private apiSer:ApiService) { }
  ngOnInit(): void {
   
  }

  ngDoCheck(): void {
    window.onresize = () => this.mobile = window.innerWidth <= 991;

    if (localStorage["token"]) {
      this.isLoggedIn = true;
      this.userSer.justLogged = true;
      this.userName = this.userSer.userName;
      
    } else {
      this.isLoggedIn = false;
      this.mobile = false;
    }
    // localStorage["token"] ? this.isLoggedIn : !this.isLoggedIn;
  }

    logout():void{
      this.userSer.logOut()
    }

    toggle():void{
      this.showDrop = !this.showDrop;
      console.log(this.showDrop)
    }

  toggleClass():void {
    this.classAdded = !this.classAdded;
  }

}

