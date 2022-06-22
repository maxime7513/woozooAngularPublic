import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// routing
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// home page
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home-page/home/home.component';
import { FooterHomePageComponent } from './home-page/footer-home-page/footer-home-page.component';
// professionnel
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { PresentationComponent } from './professionnel/presentation/presentation.component';
import { OffresComponent } from './professionnel/offres/offres.component';
import { ValeursComponent } from './professionnel/valeurs/valeurs.component';
import { SecteursComponent } from './professionnel/secteurs/secteurs.component';
import { CommentairesComponent } from './professionnel/commentaires/commentaires.component';
import { ClientsSliderComponent } from './professionnel/clients-slider/clients-slider.component';
import { DevisComponent } from './professionnel/devis/devis.component';
import { PartenairesComponent } from './professionnel/partenaires/partenaires.component';
import { PopupLivraisonComponent } from './professionnel/popup-livraison/popup-livraison.component';
import { MiseDispositionDetailsComponent } from './professionnel/mise-disposition-details/mise-disposition-details.component';

// secteur
import { SecteurComponent } from './secteur/secteur.component';
import { ContenuSecteurComponent } from './secteur/contenu-secteur/contenu-secteur.component';

//coursier
import { CoursierComponent } from './coursier/coursier.component';
import { PresentationCoursierComponent } from './coursier/presentation-coursier/presentation-coursier.component';
import { BesoinsComponent } from './coursier/besoins/besoins.component';
import { InscriptionCoursierComponent } from './coursier/inscription-coursier/inscription-coursier.component';
import { CsmComponent } from './coursier/csm/csm.component';
import { AvantagesComponent } from './coursier/avantages/avantages.component';
import { PopupFormulaireContactComponent } from './popup-formulaire-contact/popup-formulaire-contact.component';

// service
import { PopupService } from './services/popup.service';
import { SecteursService } from './services/secteurs.service';
import { OffresService } from './services/offres.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeComponent,
    FooterHomePageComponent,
    HeaderComponent,
    ProfessionnelComponent,
    PresentationComponent,
    OffresComponent,
    ValeursComponent,
    SecteursComponent,
    CommentairesComponent,
    ClientsSliderComponent,
    DevisComponent,
    MiseDispositionDetailsComponent,
    PopupLivraisonComponent,
    PartenairesComponent,
    SecteurComponent,
    ContenuSecteurComponent,
    CoursierComponent,
    PresentationCoursierComponent,
    BesoinsComponent,
    InscriptionCoursierComponent,
    CsmComponent,
    AvantagesComponent,
    PopupFormulaireContactComponent,
    FooterComponent,
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
  providers: [ PopupService, SecteursService, OffresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
