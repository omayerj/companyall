import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';
import { coupon } from '../coupns/coupns.component';

@Component({
  selector: 'app-get-by-price',
  templateUrl: './get-by-price.component.html',
  styleUrls: ['./get-by-price.component.css']
})
export class GetByPriceComponent implements OnInit {
  price: number;
  Coupons: coupon[];
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
  }

  getAll(event){
    console.log("getAll " + event);
    this.webapiService.getMaxPriceFromCopany(this.price).subscribe((coupon) => {
      console.log(coupon);
      this.Coupons = coupon;
    });
  }

}
