import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FontAwesomeModule,
    RecaptchaV3Module
  ],
  exports: [ContactComponent],
  providers: [ContactService, {provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey}]
})
export class ContactModule { }
