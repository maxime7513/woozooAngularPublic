import { Component, HostListener, OnInit } from '@angular/core';
import { PopupService } from '../services/popup.service';
import { SecteursService } from '../services/secteurs.service';
import {Location} from "@angular/common";
import { ContactService } from '../shared/contact-dialog/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getScreenWidth: any;
  headerMobileShow : boolean;
  solutionsSubMenu : boolean;
  secteursSubMenu : boolean;
  logoWoozoo : string;
  headerPage: string = '';
  scrolled: boolean;
  boutonContact : string = '';
  cheminRouterLink : string = '';
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
      this.scrolled = window.scrollY > 50;
  };
  constructor(private contactService: ContactService,
              private PopupLivraisonService: PopupService,
              private secteursService: SecteursService,
              private location: Location)
  {
    this.scrolled = false;
    // this.headerSecteur = false;
    this.headerMobileShow = false;
    this.solutionsSubMenu = false;
    this.secteursSubMenu = false;
    this.getScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getTypeHeader();
  }

  dropdownHeader(){
    this.headerMobileShow = !this.headerMobileShow;
  }

  scroll(el: string, reglageHeight: number){ // function scroll
    let y = (document.getElementById(el) as HTMLElement).offsetTop;
    window.scrollTo({top: y - reglageHeight, behavior: 'smooth'});
    this.dropdownHeader(); //fermer header mobile
  }

  openPopup(){ // formulaire livraison
    this.PopupLivraisonService.openPopupLivraison();
    this.dropdownHeader(); //fermer header mobile
  }

  openPopupFormulaire(){ // formulaire de contact
    this.contactService.openPopupFormulaireContact();
    this.dropdownHeader(); //fermer header mobile
  }

  changeSecteur(el: string) {
    this.secteursService.changeSecteurService(el);
    this.dropdownHeader(); //fermer header mobile
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
      // this.headerSecteur = true;
    }else if('mentionsLegales'.includes(path) || 'confidentialite'.includes(path) || 'conditionsGenerales'.includes(path)){
      this.headerPage = 'mentionsLegales';
      this.boutonContact = 'Contactez-nous';
      this.cheminRouterLink = '';
    }
  }

}
