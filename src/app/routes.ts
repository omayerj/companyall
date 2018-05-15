import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WebapiService } from './server/webapi.service';
import { Routes } from '@angular/router'
import { GetByTypeComponent } from './get-by-type/get-by-type.component';
import { GetByPriceComponent } from './get-by-price/get-by-price.component';
import { PurchasedCouponsComponent } from './purchased-coupons/purchased-coupons.component';
import { BuyCouponsComponent } from './buy-coupons/buy-coupons.component';


export const appRoutes: Routes = [
  {
    path: 'Customer',
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'getByType',
        component: GetByTypeComponent
      },
      {
        path: 'PurchasedCoupons',
        component: PurchasedCouponsComponent
      },
      {
        path: 'purchaseCoupon',
        component: BuyCouponsComponent
      },
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'getByPrice',
        component: GetByPriceComponent
      }
    ]
  }, {
    path: '', redirectTo: '/Customer', pathMatch: 'full'
  }
];