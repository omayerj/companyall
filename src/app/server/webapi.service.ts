import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Response } from "@angular/http";
// import { Observable } from 'rxjs';

@Injectable()
export class WebapiService {
  readonly rootUrl = 'http://localhost:8080/';
  // constructor(private http: HttpClient) { 
  constructor(private http: Http) {
    console.log('webAPI run ....');
  }
  private messageSource = new BehaviorSubject<string>("null");
  currentMessage = this.messageSource.asObservable();
  // getMaxPriceFromCopany(MaxPrice){
  //   return  this.http.get(this.rootUrl+'api/companyres/less?MaxPrice='+MaxPrice);
  //  }
  // getPost() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  // }
  getcoupons() {
    return this.http.get(this.rootUrl + 'api/companyres/getcoupons').map(res => res.json());
  }
  getCompany() {
    return this.http.get(this.rootUrl + 'api/companyres/Company').map(res => res.json());
  }
  getMaxPriceFromCopany(MaxPrice) {
    return this.http.get(this.rootUrl + 'api/companyres/less?MaxPrice=' + MaxPrice).map(res => res.json());
  }
  getByEndDate(EndDate) {
    return this.http.get(this.rootUrl + 'api/companyresGet/?getCouponByEndDate=' + EndDate).map(res => res.json());
  }
  getByType(Type) {
    return this.http.get(this.rootUrl + 'api/companyres/?getCouponByType='+Type).map(res => res.json());
  }

  createCoupon(Coupon) {
    return this.http.post(this.rootUrl + 'api/companyres/createCoupon', Coupon).map(res => res.json());
  }
  logout() {
    return this.http.post(this.rootUrl + 'api/logout', null).map(res => res.json());
  }
  removeCoupoun(Coupon) {
    console.log('removeCoupoun');
    console.log(Coupon);
    return this.http.post(this.rootUrl + 'api/companyres/removeCoupoun', Coupon).map(res => res.json());
  }
  updateCoupon(Coupon) {
    console.log('removeCoupoun');
    console.log(Coupon);
    return this.http.put(this.rootUrl + 'api/companyres/updateCoupon', Coupon).map(res => res.json());
  }
  changeMessage(message) {
    this.messageSource.next(message)
  }

}
