import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './recipes/pages/home/home.component';
import { RecetaComponent } from './recipes/pages/receta/receta.component';
import { SharedModule } from '../shared/shared.module';
import { RestaurantsComponent } from './recipes/pages/restaurants/restaurants.component';
import { IngredientsComponent } from './recipes/pages/ingredients/ingredients.component';
import { ProdcutsComponent } from './recipes/pages/prodcuts/prodcuts.component';
import { ToolsComponent } from './recipes/pages/tools/tools.component';
import { ImageUrlPipe } from './pipes/image-url.pipe';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    HomeComponent,
    RecetaComponent,
    RestaurantsComponent,
    IngredientsComponent,
    ProdcutsComponent,
    ToolsComponent,
    ImageUrlPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
