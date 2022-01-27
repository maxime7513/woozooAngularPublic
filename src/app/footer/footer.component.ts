import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from '../services/popup.service';
import { SecteursService } from '../services/secteurs.service';
import { OffresService } from '../services/offres.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  currentDate: Date = new Date();
  footerPage: string = '';
  cheminRouterLink : string = '';
  titreLinkFooter : string = '';
  @Input() popupInscription: any;


  constructor(private PopupService: PopupService,
              private secteursService: SecteursService,
              private offreService: OffresService,
              private location: Location) { }

  ngOnInit(): void {
    this.getTypeFooter();
  }

  openPopupFormulaire(){
    this.PopupService.openPopupFormulaireContact();
  }
  
  changeSecteur(el: string) { // page secteur
    this.secteursService.changeSecteurService(el);
  }

  changeOffre(el: string) { // page professionnel
    setTimeout(() => {
      this.offreService.changeOffreDetails(el);
    }, 1000);
  }


  activerPopupInscription(){ // page coursier
    this.popupInscription.activerPopup();
  }

  getTypeFooter() {
    const path = this.location.prepareExternalUrl(this.location.path()).slice(1);
    if ('coursier'.includes(path)) {
      this.footerPage = 'coursier';
      this.titreLinkFooter = 'Liens';
    }else if('professionnel'.includes(path)){
      this.footerPage = 'professionnel';
      this.cheminRouterLink = '../secteur';
      this.titreLinkFooter = "secteurs d'activité";
    }else if('secteur'.includes(path)){
      this.footerPage = 'secteur';
      this.cheminRouterLink = '../professionnel';
      this.titreLinkFooter = 'nos solutions';
    }
  }

}
