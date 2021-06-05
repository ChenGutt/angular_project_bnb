import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLogged: any;
  ApiUrl: string = "https://istaybnb.herokuapp.com"

  constructor(private http: HttpClient) { }

  getHeader(_url: any): any {
    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.get(_url, { headers: xAuth })
    }
  }

  postReqWithHeader(_url: any, _bodyData: any): any {
    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.post(_url, _bodyData, { headers: xAuth })
    }
  }

  getRequest(_url: any): any {
    return this.http.get(_url);
  }

  postRequest(_url: any, _bodyData: any): any {
    return this.http.post(_url, _bodyData)
  }

  putRequest(_url: any, _bodyData: any): any {
    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.put(_url, _bodyData, { headers: xAuth })
    }

  }


  delRequest(_url: any): any {

    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.delete(_url, { headers: xAuth })
    }

  }

}


