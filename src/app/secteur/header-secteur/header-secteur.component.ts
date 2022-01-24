import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-header-secteur',
  templateUrl: './header-secteur.component.html',
  styleUrls: ['./header-secteur.component.scss']
})
export class HeaderSecteurComponent implements OnInit {

  constructor(private PopupLivraisonService: PopupService) { }

  ngOnInit(): void {
  }

  openPopup(){
    this.PopupLivraisonService.openPopupLivraison();
  }

}
