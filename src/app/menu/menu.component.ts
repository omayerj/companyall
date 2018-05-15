import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private webapiService: WebapiService) { }
  Customer: customer;
  ngOnInit() {
    this.webapiService.getCustomer().subscribe((customer) => {
      console.log(customer);
      this.Customer = customer;
      // coupon.map(x => x.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

    });
  }

}

interface customer {
  id: number,
  custName: string
  // email: string
}