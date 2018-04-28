import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-create-coupns',
  templateUrl: './create-coupns.component.html',
  styleUrls: ['./create-coupns.component.css']
})
export class CreateCoupnsComponent implements OnInit {

  Coupon: couponCreate;
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
    this.resetCreateCoupon();
  }

  createCoupon(event) {
    console.log("RemoveButton " + event);
    console.log("Coupon ", this.Coupon);
    this.webapiService.createCoupon(this.Coupon).subscribe((res) => {
      console.log(res);

    });
    this.resetCreateCoupon();

  }

  resetCreateCoupon(form?: NgForm) {
    if (form != null)
      form.reset();
    this.Coupon = {
      title: '',
      amount: 0,
      type: '',
      message: '',
      price: '',
      image: '',
      startDate: new Date(),
      endDate: new Date()
    }

  }


}


export interface couponCreate {

  title: string,
  startDate: Date,
  endDate: Date,
  amount: number,
  type: string,
  message: string,
  price: string,
  image: string

}
