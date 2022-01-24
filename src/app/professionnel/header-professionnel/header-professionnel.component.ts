import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-header-professionnel',
  templateUrl: './header-professionnel.component.html',
  styleUrls: ['./header-professionnel.component.scss']
})
export class HeaderProfessionnelComponent implements OnInit {
  scrolled: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
      this.scrolled = window.scrollY > 50;
  };
  @Input() contenuVisibleOffres: any;
  
  constructor(private PopupLivraisonService: PopupService, private data: SecteursService) { }

  ngOnInit(): void {
  }

  openPopup(){
    this.PopupLivraisonService.openPopupLivraison();
  }

  openPopupFormulaire(){
    this.PopupLivraisonService.openPopupFormulaireContact();
  }

  contenuVisibleOffre(el: string) { // changer contenu visible offres-details
    this.contenuVisibleOffres.changeContenu(el);
  }

  changeSecteur(el: string) {
    this.data.changeSecteurService(el);
  }

}