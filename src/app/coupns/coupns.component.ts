import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';



@Component({
  selector: 'app-coupns',
  templateUrl: './coupns.component.html',
  styleUrls: ['./coupns.component.css']
})
export class CoupnsComponent implements OnInit {
  userClaims: any;
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

  RemoveButton(event, coupon) {
    console.log("RemoveButton " + event);
    console.log("coupon ");
    console.log(coupon);
    this.webapiService.removeCoupoun(coupon).subscribe((res) => {
    });
    //BAD
    setTimeout(this.loadData(), 1000);
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