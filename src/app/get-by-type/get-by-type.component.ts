import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';
import { coupon } from '../coupns/coupns.component';

@Component({
  selector: 'app-get-by-type',
  templateUrl: './get-by-type.component.html',
  styleUrls: ['./get-by-type.component.css']
})
export class GetByTypeComponent implements OnInit {
  type: string;
  Coupons: coupon[];
  constructor(private webapiService: WebapiService) { }

  ngOnInit() {
  }
  
  getAll(event){
    console.log("getAll " + event);
    this.webapiService.getByType(this.type).subscribe((coupon) => {
      console.log(coupon);
      this.Coupons = coupon;
    });
  }

}
