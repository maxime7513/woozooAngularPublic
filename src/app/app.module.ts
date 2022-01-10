import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterHomePageComponent } from './home-page/footer-home-page/footer-home-page.component';
import { HomeComponent } from './home-page/home/home.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { PresentationComponent } from './professionnel/presentation/presentation.component';
import { HeaderComponent } from './header/header.component';
import { ClientsSliderComponent } from './professionnel/clients-slider/clients-slider.component';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OffresComponent } from './professionnel/offres/offres.component';
import { ValeursComponent } from './professionnel/valeurs/valeurs.component';
import { SecteursComponent } from './professionnel/secteurs/secteurs.component';
import { CommentairesComponent } from './professionnel/commentaires/commentaires.component';
import { DevisComponent } from './professionnel/devis/devis.component';
import { PopupLivraisonComponent } from './professionnel/popup-livraison/popup-livraison.component';
import { PopupLivraisonService } from './services/popup-livraison.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OffresDetailsComponent } from './professionnel/offres/offres-details/offres-details.component';
import { PartenairesComponent } from './professionnel/partenaires/partenaires.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterHomePageComponent,
    HomeComponent,
    ProfessionnelComponent,
    PresentationComponent,
    HeaderComponent,
    ClientsSliderComponent,
    OffresComponent,
    ValeursComponent,
    SecteursComponent,
    CommentairesComponent,
    DevisComponent,
    PopupLivraisonComponent,
    OffresDetailsComponent,
    PartenairesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    SlickCarouselModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NgxPageScrollModule,
  ],
  providers: [PopupLivraisonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
