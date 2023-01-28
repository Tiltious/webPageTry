import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-one-column',
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>
      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <nb-layout-footer fixed>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
  styleUrls: ['./one-column.component.scss']
})
export class OneColumnComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

}