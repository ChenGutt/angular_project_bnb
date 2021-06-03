
import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-search-and-sort',
  templateUrl: './search-and-sort.component.html',
  styleUrls: ['./search-and-sort.component.css']
})
export class SearchAndSortComponent implements OnInit {
  searchWord: any = "";
  sortInput: string = "perNight";
  url: any;
  pageNum:any;
  constructor(private apartmentsSer: ApartmentService) { }

  ngOnInit(): void {
    this.apartmentsSer.pageNum = this.pageNum;
    this.apartmentsSer.searchWord = this.searchWord;
    this.apartmentsSer.sortInput = this.sortInput;
  }

  getSearchQ(e: any) {
    this.searchWord = e.target.value;
    console.log(e.target.value)
    if (!this.searchWord) {
      console.log(this.apartmentsSer.pageNum)
      this.getSearchResults()
    }
  }

  getSearchResults() {
    console.log(this.searchWord)
    console.log(this.sortInput)
    this.url = `${this.apartmentsSer.ApiUrl}/appartments?q=${this.searchWord}&sort=${this.sortInput}&perPage=${this.apartmentsSer.perPage}&${this.apartmentsSer.pageNum}`
      console.log(this.url)
   
   
    this.apartmentsSer.searchWord = this.searchWord;
    this.apartmentsSer.sortInput = this.sortInput;

    this.apartmentsSer.getApiApartments(this.url);


  }
}
