import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DecimalPipe } from '@angular/common';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';



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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    CreateCoupnsComponent,
    SortCoupnsComponent,
    CoupnsComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
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
      }
    ])
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
