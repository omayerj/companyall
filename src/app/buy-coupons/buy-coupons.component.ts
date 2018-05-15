import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-buy-coupons',
  templateUrl: './buy-coupons.component.html',
  styleUrls: ['./buy-coupons.component.css']
})
export class BuyCouponsComponent implements OnInit {

  Coupons: coupon[];
  constructor(private webapiService: WebapiService) { }
  ngOnInit() {
    this.loadData();
  }

  purchaseCoupon(event, coupon) {
    console.log("purchaseCoupon" + event);
    console.log("coupon ");
    console.log(coupon);
    this.webapiService.purchaseCoupon(coupon).subscribe((res) => {
    });
    this.loadData()
  }
  loadData() {
    console.log('loadData');
    this.webapiService.getcoupons().subscribe((coupon) => {
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
