import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menus';

@Component({
  selector: 'app-pages',
  template: `
    <app-one-column>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-one-column>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }
  menu = MENU_ITEMS;
  ngOnInit(): void {
  }

}
