import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-own-properties',
  templateUrl: './list-own-properties.component.html',
  styleUrls: ['./list-own-properties.component.css']
})
export class ListOwnPropertiesComponent implements OnInit {
  ownProperty_ar: any[] = [];
  imageExists: boolean = true;
  constructor(private apartmentsSer: ApartmentService, private router:Router, private authSer:AuthService) { }


  ngOnInit(): void {
    this.authSer.checkIfToken()
    let url = `${this.apartmentsSer.ApiUrl}/appartments/ownproperties`;
    this.apartmentsSer.yourProperties(url)
    this.ownProperty_ar = this.apartmentsSer.getOwnProperties()
    console.log(this.ownProperty_ar)
  }
  removeItem(id:any): void {
    let url = `${this.apartmentsSer.ApiUrl}/appartments/${id}`
    if (confirm("Are you sure you want to delete?")) {
      this.apartmentsSer.deleteProperty(url)
      this.router.navigate(['apartments/ownproperties'])
    }
 
  }
}
