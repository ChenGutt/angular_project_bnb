import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  //main URL
  ApiUrl: string = "https://istaybnb.herokuapp.com"

  constructor(private http: HttpClient) { }

  //simple get request, no header needed, no validation. 
  getRequest(_url: string): any {
    return this.http.get(_url);
  }

  
  //simple post request - no header needed, no validation. 
  postRequest(_url: string, _bodyData: any): any {
    return this.http.post(_url, _bodyData)
  }

  //get request with header - authorized users
  getHeader(_url: string): any {
    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.get(_url, { headers: xAuth })
    }
  }

  //post request with header  - authorized users
  postReqWithHeader(_url: string, _bodyData: any): any {
    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.post(_url, _bodyData, { headers: xAuth })
    }
  }

  //put request with header - authorized users
  putRequest(_url: string, _bodyData: any): any {
    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.put(_url, _bodyData, { headers: xAuth })
    }

  }

//delete request with header - authorized users 
  delRequest(_url: string): any {

    if (localStorage['token']) {
      let xAuth = new HttpHeaders({
        'x-auth-token': localStorage['token'],
        'content-type': 'application/json'
      })
      return this.http.delete(_url, { headers: xAuth })
    }

  }

}


