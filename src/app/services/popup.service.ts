import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupLivraisonComponent } from '../professionnel/popup-livraison/popup-livraison.component';
import { PopupFormulaireContactComponent } from '../popup-formulaire-contact/popup-formulaire-contact.component';

@Injectable()
export class PopupService {
  
  constructor(private dialog: MatDialog) {
  }

  openPopupLivraison() {
    this.dialog.open(PopupLivraisonComponent);
  }

  openPopupFormulaireContact() {
    this.dialog.open(PopupFormulaireContactComponent);
  }

}
