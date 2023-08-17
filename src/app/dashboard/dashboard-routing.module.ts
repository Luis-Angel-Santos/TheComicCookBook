import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './recipes/pages/home/home.component';
import { RecetaComponent } from './recipes/pages/receta/receta.component';

const routes: Routes = [
  {
    path: '',
    component : DashboardLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'receta/:id', component: RecetaComponent },
      { path: 'restaurants', component: RecetaComponent },
      { path: 'ingredients', component: RecetaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
