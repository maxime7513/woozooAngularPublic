import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfidentialiteRoutingModule } from './confidentialite-routing.module';
import { ConfidentialiteComponent } from 'src/app/confidentialite/confidentialite.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [ConfidentialiteComponent],
  imports: [
    CommonModule,
    ConfidentialiteRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ConfidentialiteModule { }
