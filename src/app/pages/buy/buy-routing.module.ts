import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy.component';
import { HouseComponent } from './house/house.component';
import { BusinessComponent } from './business/business.component';
import { LandComponent } from './land/land.component';
import { LatestSalesComponent } from './latest-sales/latest-sales.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { BuyGuideComponent } from './buy-guide/buy-guide.component';

const routes: Routes = [
  {
    path:'',
    component:BuyComponent,
    children:[
      {
        path:'house',
        component:HouseComponent
      },
      {
        path:'business',
        component:BusinessComponent
      },
      {
        path:'land',
        component:LandComponent
      },
      {
        path:'latestSales',
        component:LatestSalesComponent
      },
      {
        path:'comingSoon',
        component:ComingSoonComponent
      },
      {
        path:'guide',
        component:BuyGuideComponent
      },
      {
        path: '',
        redirectTo: 'house',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
