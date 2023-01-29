import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { RentComponent } from './rent/rent.component';
import { LoansComponent } from './loans/loans.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'buy',
        loadChildren: () => import('./buy/buy.module')
        .then(m => m.BuyModule),
      },
      {
        path:'sell',
        component:SellComponent
      },
      {
        path:'rent',
        component:RentComponent
      },
      {
        path:'loans',
        component:LoansComponent
      },
      {
        path:'aboutUs',
        component:AboutUsComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
