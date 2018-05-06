import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCoupnsComponent } from './create-coupns/create-coupns.component';
import { SortCoupnsComponent } from './sort-coupns/sort-coupns.component';
import { CoupnsComponent } from './coupns/coupns.component';
import { WebapiService } from './server/webapi.service';
import { Routes } from '@angular/router'


export const appRoutes: Routes = [
    {
      path: 'Company',
      // component: MainComponent,
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
          path: 'sortCoupns',
          component: SortCoupnsComponent
        },
        {
          path: 'coupns',
          component: CoupnsComponent
        },
        {
          path: '',
          component: MainComponent
        }
      ]
    },{
      path:'',redirectTo:'/Company',pathMatch:'full'
    }
  ];