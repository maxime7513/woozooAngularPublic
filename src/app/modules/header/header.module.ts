import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from 'src/app/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactModule } from 'src/app/shared/contact-dialog/contact.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PopupService } from 'src/app/services/popup.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    FontAwesomeModule,
    ContactModule,
    NgxPageScrollModule,
    LazyLoadImageModule
  ],
  exports: [HeaderComponent],
  providers: [PopupService]
})
export class HeaderModule { }
