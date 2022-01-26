import { Component, HostListener, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';
import { PopupService } from '../services/popup.service';
import { SecteursService } from '../services/secteurs.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerPage: string = '';
  scrolled: boolean = false;
  boutonContact : string = '';
  cheminRouterLink : string = '';
  headerSecteur : boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
      this.scrolled = window.scrollY > 50;
  };
  constructor(private PopupLivraisonService: PopupService, 
              private secteursService: SecteursService,
              private offresService: OffresService, 
              private location: Location) {}

  ngOnInit(): void {
    this.getTypeHeader();
  }

  scroll(el: string, reglageHeight: number){ // function scroll
    let y = (document.getElementById(el) as HTMLElement).offsetTop;
    window.scrollTo({top: y - reglageHeight, behavior: 'smooth'});
  }

  openPopup(){
    this.PopupLivraisonService.openPopupLivraison();
  }

  openPopupFormulaire(){
    this.PopupLivraisonService.openPopupFormulaireContact();
  }

  contenuVisibleOffre(el: string) { // changer contenu visible offres-details
    this.offresService.changeOffreDetails(el);
  }

  changeSecteur(el: string) {
    this.secteursService.changeSecteurService(el);
  }

  getTypeHeader() {
    const path = this.location.prepareExternalUrl(this.location.path()).slice(1);
    if ('coursier'.includes(path)) {
        // return 'bg-dark';
        this.headerPage = 'coursier';
        this.boutonContact = 'Contactez-nous';
    }else if('professionnel'.includes(path)){
      this.headerPage = 'professionnel';
      this.boutonContact = 'Contactez un commercial';
    }else if('secteur'.includes(path)){
      this.headerPage = 'secteur';
      this.boutonContact = 'Contactez un commercial';
      this.cheminRouterLink = '../professionnel';
      this.headerSecteur = true;
    }
  }

}
