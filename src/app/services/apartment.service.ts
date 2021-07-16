import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  singleInfo: any = {}
  apartment_ar: any[] = [];
  ownProperty_ar: any[] = []
  singleProperty: any = {}
  searchWord: any;
  sortInput: any;
  total_items: any;
  number_ar: any = [];
  perPage: number = 3;
  currentPage: any;
  pageNum: any;
  ApiUrl: string = this.apiSer.ApiUrl

  constructor(private apiSer: ApiService, private router: Router, private toast: ToastService) { }

  //returns list of apartments.

  getApartments(): any {
    return this.apartment_ar;
  }

  //list of apartments on homePage - PAGINATION 

  getApiApartments(url: any): void {
    this.apiSer.getRequest(url).subscribe((res: any) => {
      if (res.search_total == 0) {
        this.toast.showInfo("Your search gave no results", "Oh oh")
      }
      this.apartment_ar.splice(0, this.apartment_ar.length)
      for (let key in res.results) {
        this.apartment_ar.push(res.results[key])
        console.log(this.apartment_ar)
      }
      this.number_ar.splice(0, this.number_ar.length)
      for (let i = 1; i <= Math.ceil(res.search_total / this.perPage); i++) {
        this.number_ar.push(i)
      }
    }
      , (rej: any) => {
        console.log(rej)
      })
  }

  // adding new property 

  addProperty(url: any, bodyForm: any) {
    this.apiSer.postReqWithHeader(url, bodyForm).subscribe((res: any) => {
      console.log(res);
      this.toast.showSuccess("Your new property was successfully added", "Congrats!")
      setTimeout(() => {
        this.router.navigate(['/apartments/ownproperties'])
      }, 1500)

    }, (rej: any) => {
      console.log(rej)
      this.toast.showError("Something went wrong. Please try again", "oh oh")
    })
  }

  // collecting list of user's properties

  yourProperties(url: any): void {
    this.apiSer.getHeader(url).subscribe((res: any) => {
      console.log(res)
      this.ownProperty_ar.splice(0, this.ownProperty_ar.length, ...res)
    })
  }

  //returns list of user's properties
  getOwnProperties(): any {
    return this.ownProperty_ar;
  }

  //gets info about single property
  getSingle(url: any): void {
    this.apiSer.getHeader(url).subscribe((res: any) => {
      console.log(res)
      for (let key in res) {
        this.singleProperty[key] = res[key]
      }
      console.log(this.singleProperty)
    })
  }

  //returns info about single property
  getSingleObj(): any {
    return this.singleProperty;
  }

  //update a single property
  updateProperty(url: any, dataBody: any) {
    this.apiSer.putRequest(url, dataBody).subscribe((res: any) => {
      console.log(res);
      this.toast.showInfo("Property was successfully updated", "")
      setTimeout(() => {
        this.router.navigate(['/apartments/ownproperties'])
      }, 1500)

    })
  }

  //delete a single property
  deleteProperty(url: any) {
    this.apiSer.delRequest(url).subscribe((res: any) => {
      console.log(res)
      this.toast.showInfo("Property was deleted", "")
      setTimeout(() => {
        location.reload()
      }, 2000)
    })
  }
}
