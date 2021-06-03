import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-list-apartments',
  templateUrl: './list-apartments.component.html',
  styleUrls: ['./list-apartments.component.css']
})
export class ListApartmentsComponent implements OnInit {
  apartment_ar:any[] = []
  show:boolean = false;
  url:any;
  pageNum:any;
  totalItems:any;
  number_ar:any[] = []
  perPage:number = 3;
  currentPage:any = 0;
  
  constructor(private apartmentsSer: ApartmentService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.apartment_ar = this.apartmentsSer.getApartments();
    this.url = `${this.apartmentsSer.ApiUrl}/appartments?pageNum=${this.pageNum}`
    console.log(this.url)
    this.apartmentsSer.getApiApartments(this.url);
    console.log(this.apartmentsSer.getApartments())
    this.number_ar = this.apartmentsSer.number_ar;
    this.number_ar.splice(0, this.number_ar.length)
    console.log(this.number_ar)
     }

  
  searchWithQueries(i:any){
    this.apartment_ar.splice(0, this.apartment_ar.length)
    this.currentPage = i;
    this.pageNum = i;
    this.perPage = this.apartmentsSer.perPage;
    this.apartmentsSer.currentPage = this.currentPage;
    console.log(this.perPage)
    console.log(this.apartmentsSer.searchWord)
    console.log(this.apartmentsSer.sortInput)
    this.url = `${this.apartmentsSer.ApiUrl}/appartments?q=${this.apartmentsSer.searchWord}&pageNum=${this.pageNum}&perPage=${this.apartmentsSer.perPage}&sort=${this.apartmentsSer.sortInput}`

    this.apartmentsSer.pageNum = this.pageNum
    console.log(this.url)
      
    
    this.apartmentsSer.getApiApartments(this.url);
    console.log(this.url)
    this.number_ar.splice(0, this.number_ar.length)
   
  }

  resultsPerPage(perPage: any): void{
    this.pageNum = 0;
    this.currentPage = this.pageNum;
    console.log(this.pageNum)
    console.log(this.currentPage)
    console.log(this.perPage)
    this.number_ar.splice(0, this.number_ar.length)
    perPage = this.perPage;
    this.apartmentsSer.perPage = perPage;
    this.url = `${this.apartmentsSer.ApiUrl}/appartments?q=${this.apartmentsSer.searchWord}&pageNum=${this.pageNum}&perPage=${this.apartmentsSer.perPage}&sort=${this.apartmentsSer.sortInput}&${this.pageNum}`
    this.apartmentsSer.getApiApartments(this.url);
    console.log(this.url)

  }
  
  onAlert():void{
    location.reload()
  }
}
