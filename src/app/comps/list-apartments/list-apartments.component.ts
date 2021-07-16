import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-list-apartments',
  templateUrl: './list-apartments.component.html',
  styleUrls: ['./list-apartments.component.css']
})
export class ListApartmentsComponent implements OnInit {
  apartment_ar: any[] = []
  // show: boolean = false;
  url: any;
  pageNum: any;
  totalItems: any;
  number_ar: any[] = []
  perPage: number = 3;
  currentPage: any = 0;

  constructor(private apartmentsSer: ApartmentService, private route: ActivatedRoute) { }

  ngOnInit() {

    //get list of apartments into aparmtent_ar

    this.url = `${this.apartmentsSer.ApiUrl}/appartments`
    this.apartmentsSer.getApiApartments(this.url);
    console.log(this.apartmentsSer.getApartments());
    this.apartment_ar = this.apartmentsSer.getApartments();

    //number_ar for Pagination

    this.number_ar.splice(0, this.number_ar.length);
    this.number_ar = this.apartmentsSer.number_ar;
  }

  changePage(i: any) {
    this.apartment_ar.splice(0, this.apartment_ar.length)

    //currentPage = allow to show active page number

    this.currentPage = i;
    this.pageNum = i;
    this.perPage = this.apartmentsSer.perPage;
    this.apartmentsSer.currentPage = this.currentPage;

    //a new API request with all relevant queries

    this.url = `${this.apartmentsSer.ApiUrl}/appartments?q=${this.apartmentsSer.searchWord}&pageNum=${this.pageNum}&perPage=${this.apartmentsSer.perPage}&sort=${this.apartmentsSer.sortInput}`

    this.apartmentsSer.pageNum = this.pageNum;

    this.apartmentsSer.getApiApartments(this.url);
    // this.number_ar.splice(0, this.number_ar.length)

  }

  //adjust num of results to be shown per page according to user's choice

  resultsPerPage(perPage: any): void {
    this.pageNum = 0;
    this.currentPage = this.pageNum;
    this.number_ar.splice(0, this.number_ar.length)
    perPage = this.perPage;
    this.apartmentsSer.perPage = perPage;
    this.url = `${this.apartmentsSer.ApiUrl}/appartments?q=${this.apartmentsSer.searchWord}&pageNum=${this.pageNum}&perPage=${this.apartmentsSer.perPage}&sort=${this.apartmentsSer.sortInput}&${this.pageNum}`
    this.apartmentsSer.getApiApartments(this.url);
  }
}
