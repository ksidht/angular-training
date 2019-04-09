import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, 
        MatSidenavModule,
        MatListModule,
        MatToolbarModule, 
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    } from '@angular/material';

    import { LoginLayoutComponent } from '../../core/login-layout/login-layout.component';
    import { MainLayoutComponent } from '../../core/main-layout/main-layout.component';
    import { HeaderComponent } from '../../core/header/header.component';
    import { FooterComponent } from '../../core/footer/footer.component';
    import { SidebarComponent } from '../../core/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [ LoginLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent],
  imports: [
    CommonModule,
    MatCardModule, 
    MatSidenavModule,
    MatListModule,
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
