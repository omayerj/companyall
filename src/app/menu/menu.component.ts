import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../server/webapi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private webapiService: WebapiService) { }
  Company: company;
  ngOnInit() {
    this.webapiService.getCompany().subscribe((company) => {
      console.log(company);
      this.Company = company;
      // coupon.map(x => x.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

    });
  }

}

interface company {
  id: number,
  compName: string,
  email: string
}