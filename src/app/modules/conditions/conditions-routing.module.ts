import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsGeneralesComponent } from 'src/app/conditions-generales/conditions-generales.component';

const routes: Routes = [
  {
    path: '',
    component: ConditionsGeneralesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionsRoutingModule { }
