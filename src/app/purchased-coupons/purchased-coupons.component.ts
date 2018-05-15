import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-purchased-coupons',
  templateUrl: './purchased-coupons.component.html',
  styleUrls: ['./purchased-coupons.component.css']
})
export class PurchasedCouponsComponent implements OnInit {
  Coupons: coupon[];
  maxPrice;
  constructor(private webapiService: WebapiService) { }
  ngOnInit() {
    this.loadData();
  }
  UpdateButton(event, coupon) {
    console.log("UpdateButton " + event);
    console.log("coupon ");
    console.log(coupon);
    this.webapiService.changeMessage(coupon);
  }

  loadData() {
    console.log('loadData');
    this.webapiService.getAllPurchasedCoupons().subscribe((coupon) => {
      console.log(coupon);
      this.Coupons = coupon;
    });
  }
}
export interface coupon {
  id: number,
  title: string,
  startDate: Date,
  endDate: Date,
  amount: number,
  type: Date,
  message: string,
  price: string,
  image: string
}