import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Response } from "@angular/http";
// import { Observable } from 'rxjs';

@Injectable()
export class WebapiService {
  readonly rootUrl = 'http://localhost:8080/';
  // constructor(private http: HttpClient) { 
    constructor(private http: Http){
    console.log('webAPI run ....');
  }
 
  // getMaxPriceFromCopany(MaxPrice){
  //   return  this.http.get(this.rootUrl+'api/companyres/less?MaxPrice='+MaxPrice);
  //  }
  getPost(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }
  getcoupons(){
    return this.http.get(this.rootUrl+'api/companyres/getcoupons').map(res => res.json());
   }

}
