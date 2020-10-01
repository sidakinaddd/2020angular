import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { FillServeyComponent } from './fill-servey/fill-servey.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'create',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateSurveyComponent,
  },
  {
    path: 'fill',
    component: FillServeyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
