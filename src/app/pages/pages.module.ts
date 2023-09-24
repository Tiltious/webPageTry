import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';
import { LoansComponent } from './loans/loans.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BuyModule } from './buy/buy.module';
import { UserDashboardIdeaComponent } from './user-dashboard-idea/user-dashboard-idea.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    RentComponent,
    SellComponent,
    LoansComponent,
    AboutUsComponent,
    ContactComponent,
    UserDashboardIdeaComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BuyModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule, 
    NbCardModule
  ]
})
export class PagesModule { }
