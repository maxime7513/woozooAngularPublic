import { Component, OnInit } from '@angular/core';
import { PopupLivraisonService } from 'src/app/services/popup-livraison.service';

@Component({
  selector: 'app-header-secteur',
  templateUrl: './header-secteur.component.html',
  styleUrls: ['./header-secteur.component.scss']
})
export class HeaderSecteurComponent implements OnInit {

  constructor(private PopupLivraisonService: PopupLivraisonService) { }

  ngOnInit(): void {
  }

  openPopup(){
    this.PopupLivraisonService.confirmDialog();
  }

}
