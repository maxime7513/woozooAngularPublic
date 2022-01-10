import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupLivraisonComponent } from '../professionnel/popup-livraison/popup-livraison.component';

@Injectable()
export class PopupLivraisonService {
  
  constructor(private dialog: MatDialog) {
  }

  confirmDialog() {
    this.dialog.open(PopupLivraisonComponent);
  }

}
