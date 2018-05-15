import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DecimalPipe } from '@angular/common';
import { appRoutes } from './routes';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WebapiService } from './server/webapi.service';
import { GetByPriceComponent } from './get-by-price/get-by-price.component';
import { GetByTypeComponent } from './get-by-type/get-by-type.component';
import { PurchasedCouponsComponent } from './purchased-coupons/purchased-coupons.component';
import { BuyCouponsComponent } from './buy-coupons/buy-coupons.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    GetByPriceComponent,
    GetByTypeComponent,
    PurchasedCouponsComponent,
    BuyCouponsComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
