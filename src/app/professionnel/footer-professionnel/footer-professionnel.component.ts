import { Component, OnInit } from '@angular/core';
import { SecteursService } from 'src/app/services/secteurs.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-footer-professionnel',
  templateUrl: './footer-professionnel.component.html',
  styleUrls: ['./footer-professionnel.component.scss']
})
export class FooterProfessionnelComponent implements OnInit {

  constructor(private PopupLivraisonService: PopupService, private data: SecteursService) { }

  ngOnInit(): void {
  }

  openPopupFormulaire(){
    this.PopupLivraisonService.openPopupFormulaireContact();
  }
  
  changeSecteur(el: string) {
    this.data.changeSecteurService(el);
  }
  
}
