import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbIconModule, NbMenuModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';
import { LoansComponent } from './loans/loans.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BuyModule } from './buy/buy.module';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    RentComponent,
    SellComponent,
    LoansComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BuyModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule
  ]
})
export class PagesModule { }
