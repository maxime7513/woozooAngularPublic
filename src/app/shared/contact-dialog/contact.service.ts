import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from './contact.component';

@Injectable()

export class ContactService {
  
  constructor(private dialog: MatDialog) {
  }

  openPopupFormulaireContact() {
    this.dialog.open(ContactComponent);
  }

}
