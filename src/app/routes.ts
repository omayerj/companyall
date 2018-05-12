import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCoupnsComponent } from './create-coupns/create-coupns.component';
import { CoupnsComponent } from './coupns/coupns.component';
import { WebapiService } from './server/webapi.service';
import { Routes } from '@angular/router'
import { UpdatecoupnComponent } from './updatecoupn/updatecoupn.component';
import { GetByTypeComponent } from './get-by-type/get-by-type.component';
import { GetByPriceComponent } from './get-by-price/get-by-price.component';
import { GetByEndDateComponent } from './get-by-end-date/get-by-end-date.component';


export const appRoutes: Routes = [
  {
    path: 'Company',
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'createCoupns',
        component: CreateCoupnsComponent
      },
      {
        path: 'getByType',
        component: GetByTypeComponent
      },
      {
        path: 'coupns',
        component: CoupnsComponent
      },
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'Update',
        component: UpdatecoupnComponent
      },
      {
        path: 'getByPrice',
        component: GetByPriceComponent
      },
      {
        path: 'getByEndDate',
        component: GetByEndDateComponent
      }
    ]
  }, {
    path: '', redirectTo: '/Company', pathMatch: 'full'
  }
];