import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-app-apartments',
  templateUrl: './app-apartments.component.html',
  styleUrls: ['./app-apartments.component.css']
})
export class AppApartmentsComponent implements OnInit {
  constructor(private userSer: UsersService) { }

  ngOnInit(): void {
    
  }
}
