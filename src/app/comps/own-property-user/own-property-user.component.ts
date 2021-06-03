import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-own-property-user',
  templateUrl: './own-property-user.component.html',
  styleUrls: ['./own-property-user.component.css']
})
export class OwnPropertyUserComponent implements OnInit {
  
  constructor(private authSer: AuthService) { }

  ngOnInit(): void {
    this.authSer.checkIfToken()
  }

}
