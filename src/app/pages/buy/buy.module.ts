import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { HouseComponent } from './house/house.component';
import { BusinessComponent } from './business/business.component';
import { LandComponent } from './land/land.component';
import { LatestSalesComponent } from './latest-sales/latest-sales.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BuyGuideComponent } from './buy-guide/buy-guide.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    BuyComponent,
    HouseComponent,
    BusinessComponent,
    LandComponent,
    LatestSalesComponent,
    ComingSoonComponent,
    BuyGuideComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule,
    NbCardModule,
  ]
})
export class BuyModule { }
