import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionsLegalesRoutingModule } from './mentions-legales-routing.module';
import { MentionsLegalesComponent } from 'src/app/mentions-legales/mentions-legales.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [MentionsLegalesComponent],
  imports: [
    CommonModule,
    MentionsLegalesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class MentionsLegalesModule { }
