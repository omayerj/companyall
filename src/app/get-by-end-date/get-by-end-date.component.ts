import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';
import { coupon } from '../coupns/coupns.component';

@Component({
  selector: 'app-get-by-end-date',
  templateUrl: './get-by-end-date.component.html',
  styleUrls: ['./get-by-end-date.component.css']
})
export class GetByEndDateComponent implements OnInit {
  endDate: Date;
  Coupons: coupon[];

  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
  }

  getAll(event){
    console.log("getAll " + event);
    this.webapiService.getByEndDate(this.endDate).subscribe((coupon) => {
      console.log(coupon);
      this.Coupons = coupon;
    });
  }
}
