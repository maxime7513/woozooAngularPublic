import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SecteursService } from '../services/secteurs.service';
import { Location } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';
import { ContactService } from '../shared/contact-dialog/contact.service';

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
  options: AnimationOptions = {    
    path: '/assets/lottie/woozoo_loop.json',
    rendererSettings: {
      viewBoxSize: '100 200 500 500'
    }
  }; 

  constructor(private contactService: ContactService,
              private secteursService: SecteursService,
              private location: Location) { }

  ngOnInit(): void {
    this.getTypeFooter();
  }

  openPopupFormulaire(){
    this.contactService.openPopupFormulaireContact();
  }
  
  changeSecteur(el: string) { // page secteur
    this.secteursService.changeSecteurService(el);
  }

  changeOffre(el: string) { // page professionnel
    setTimeout(() => {
      let offre = document.getElementById(el) as HTMLCanvasElement;
      window.scrollTo({top: offre.offsetTop - 90, behavior: 'smooth'});
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
