import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DEFAULT_THEME } from './styles/theme.default';
import { LayoutService } from './layouts/layout.service';
import { RouterModule } from '@angular/router';
const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  RouterModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnComponent,
];
@NgModule({  
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...COMPONENTS],
  providers:[ThemeModule,LayoutService],
  declarations: [...COMPONENTS],
})
export class ThemeModule { 
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule
    };
  }
}
