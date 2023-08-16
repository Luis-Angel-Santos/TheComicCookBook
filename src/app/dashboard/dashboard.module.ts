import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './recipes/pages/home/home.component';
import { RecetaComponent } from './recipes/pages/receta/receta.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    HomeComponent,
    RecetaComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
