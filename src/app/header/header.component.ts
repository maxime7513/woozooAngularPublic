import { Component, HostListener, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';
import { PopupService } from '../services/popup.service';
import { SecteursService } from '../services/secteurs.service';
import {Location} from "@angular/common";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  barreIcon : any;
  headerPage: string = '';
  scrolled: boolean;
  boutonContact : string = '';
  cheminRouterLink : string = '';
  headerSecteur : boolean;
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
      this.scrolled = window.scrollY > 50;
  };
  constructor(private PopupLivraisonService: PopupService, 
              private secteursService: SecteursService,
              private offresService: OffresService, 
              private location: Location)
  {
    this.scrolled = false;
    this.headerSecteur = false;
    this.headerMobileShow = false;
    this.solutionsSubMenu = false;
    this.secteursSubMenu = false;
    this.barreIcon = faBars;
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth > 700){
      this.logoWoozoo = 'logo-woozoo';
    }else{
      this.logoWoozoo = 'logo-woozoo_mobile';
    }
  }

  ngOnInit(): void {
    this.getTypeHeader();
  }

  dropdownHeader(){
    this.headerMobileShow = !this.headerMobileShow;
    if(this.headerMobileShow){
      this.barreIcon = faTimes;
    }else{
      this.barreIcon = faBars;
    }
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
    this.PopupLivraisonService.openPopupFormulaireContact();
    this.dropdownHeader(); //fermer header mobile
  }

  contenuVisibleOffre(el: string) { // changer contenu visible offres-details
    this.offresService.changeOffreDetails(el);
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
      this.headerSecteur = true;
    }
  }

}
