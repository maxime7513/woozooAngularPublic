import { Component, Input, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-footer-coursier',
  templateUrl: './footer-coursier.component.html',
  styleUrls: ['./footer-coursier.component.scss']
})
export class FooterCoursierComponent implements OnInit {
  @Input() popupInscription: any;

  constructor(private PopupLivraisonService: PopupService) { }

  ngOnInit(): void {
  }

  activerPopupInscription(){
    this.popupInscription.activerPopup();
  }

  openPopupFormulaireContact(){
    this.PopupLivraisonService.openPopupFormulaireContact();
  }
  
}
