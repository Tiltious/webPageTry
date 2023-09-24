import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard-idea',
  templateUrl: './user-dashboard-idea.component.html',
  styleUrls: ['./user-dashboard-idea.component.scss']
})
export class UserDashboardIdeaComponent implements OnInit {
  dashboardComponents:any[]
  constructor() {
    this.dashboardComponents = [{
      title:'Hero section',
      head:'',
      subhead:'subTitle',
      routerLink:'routerLink',
      imgUrl:'/src/assets/bggeneric.jpg',
      layout:'col-4'
    },{
      title:'About',
      head:'Crafting Narratives',
      subhead:'Where Vision Meets Drive.',
      routerLink:'routerLink',
      imgUrl:'src/assets/bggeneric.jpg',
      layout:'col-4'
    },{
      title:'Portfolio',
      head:'Ideas in Motion',
      subhead:'The Alchemy of Creativity',
      routerLink:'routerLink',
      imgUrl:'src/assets/bggeneric.jpg',
      layout:'col-4'
    },{
      title:'Clients',
      head:'Synergies Celebrated',
      subhead:'When Paths Converge.',
      routerLink:'routerLink',
      imgUrl:'src/assets/bggeneric.jpg',
      layout:'col-4'
    },{
      title:'Contact',
      head:'Connect the Dots',
      subhead:'Begin the Next Chapter Together.',
      routerLink:'routerLink',
      imgUrl:'src/assets/bggeneric.jpg',
      layout:'col-8'
    },
  ]
   }
   
//  Hero Section
// 	About:"Crafting Narratives: Where Vision Meets Drive."
// 	Portfolio:"Ideas in Motion: The Alchemy of Creativity."
// 	Contact:"Connect the Dots: Begin the Next Chapter Together."
// 	Clients:"Synergies Celebrated: When Paths Converge."

  ngOnInit(): void {
  }

}
