import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-updatecoupn',
  templateUrl: './updatecoupn.component.html',
  styleUrls: ['./updatecoupn.component.css']
})
export class UpdatecoupnComponent implements OnInit {
  coupon;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {

    this.webapiService.currentMessage.subscribe(coupon => this.coupon = coupon)
    console.log("coupon UpdatecoupnComponent ");
    console.log(this.coupon);
  }
  UpdateCoupon(){
    console.log("UpdateCoupon");
    console.log(this.coupon);
    this.webapiService.updateCoupon(this.coupon).subscribe(coupon => {
      console.log(this.coupon);
    });
  }

}
