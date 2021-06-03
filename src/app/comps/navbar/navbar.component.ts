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
 navCollapse: boolean = false;

  constructor(private userSer: UsersService, private router: Router, private apiSer:ApiService) { }
  ngOnInit(): void {
  
    
  }

  ngDoCheck(): void {

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
      console.log("logout")
      this.userSer.logOut()
      this.navCollapse = false;
    }

  onToggleMobileMenu(): void {
    this.navCollapse = !this.navCollapse
  }


}

