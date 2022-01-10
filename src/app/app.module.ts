import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { HomeComponent } from './home-page/home/home.component';
import { FooterHomePageComponent } from './home-page/footer-home-page/footer-home-page.component';
import { PresentationComponent } from './professionnel/presentation/presentation.component';
import { ClientsSliderComponent } from './professionnel/clients-slider/clients-slider.component';
import { OffresComponent } from './professionnel/offres/offres.component';
import { ValeursComponent } from './professionnel/valeurs/valeurs.component';
import { SecteursComponent } from './professionnel/secteurs/secteurs.component';
import { CommentairesComponent } from './professionnel/commentaires/commentaires.component';
import { DevisComponent } from './professionnel/devis/devis.component';
import { PopupLivraisonComponent } from './professionnel/popup-livraison/popup-livraison.component';
import { OffresDetailsComponent } from './professionnel/offres/offres-details/offres-details.component';
import { PartenairesComponent } from './professionnel/partenaires/partenaires.component';
import { FooterComponent } from './footer/footer.component';
import { SecteursDetailsComponent } from './professionnel/secteurs-details/secteurs-details.component';

import { PopupLivraisonService } from './services/popup-livraison.service';
import { HeaderProfessionnelComponent } from './professionnel/header-professionnel/header-professionnel.component';
import { HeaderSecteursDetailsComponent } from './professionnel/secteurs-details/header-secteurs-details/header-secteurs-details.component';
import { SecteursDetailsContenuComponent } from './professionnel/secteurs-details/secteurs-details-contenu/secteurs-details-contenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterHomePageComponent,
    HomeComponent,
    ProfessionnelComponent,
    PresentationComponent,
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
    SecteursDetailsComponent,
    HeaderProfessionnelComponent,
    HeaderSecteursDetailsComponent,
    SecteursDetailsContenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    SlickCarouselModule,
    FontAwesomeModule,
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
