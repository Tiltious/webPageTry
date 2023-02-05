import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menus';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../@theme/layouts/layout.service';

@Component({
  selector: 'app-pages',
  template: `
    <app-one-column>
      <nb-menu [items]="menu" autoCollapse="true" (click)="toggleSidebar()"></nb-menu>
      <router-outlet></router-outlet>
    </app-one-column>

  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService, private layoutService: LayoutService) { }
  menu = MENU_ITEMS;
  ngOnInit(): void {
  }

  toggleSidebar(): boolean {
    if (window.innerWidth<1200) {
      this.sidebarService.toggle(true, 'menu-sidebar');
      this.layoutService.changeLayoutSize();
    }
    return false;
  }
}
