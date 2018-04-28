import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';



@Component({
  selector: 'app-coupns',
  templateUrl: './coupns.component.html',
  styleUrls: ['./coupns.component.css']
})
export class CoupnsComponent implements OnInit {
  posts: Post[];
  userClaims: any;
  Coupons: coupon[];
  maxPrice;
  constructor(private webapiService: WebapiService) { }
  ngOnInit() {


    this.webapiService.getcoupons().subscribe((coupon) => {
      console.log(coupon);
      this.Coupons = coupon;
      coupon.map(x => {
      x.price = x.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        return x;
      });

    });
  }
  UpdateButton(event) {
    console.log("UpdateButton " + event);
  }

  RemoveButton(event) {
    console.log("RemoveButton " + event);
  }

  getMaxPriceFromCopany(MaxPrice) {
    this.webapiService.getMaxPriceFromCopany(MaxPrice).subscribe((coupon) => {
      console.log("getMaxPriceFromCopany");
      this.Coupons = coupon;

    });;
  }
}
interface Post {
  id: number,
  title: string,
  body: string,
  userId: number,
  dia: number
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