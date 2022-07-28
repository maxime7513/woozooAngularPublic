import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionsRoutingModule } from './conditions-routing.module';
import { ConditionsGeneralesComponent } from 'src/app/conditions-generales/conditions-generales.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    ConditionsGeneralesComponent
  ],
  imports: [
    CommonModule,
    ConditionsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ConditionsModule { }
