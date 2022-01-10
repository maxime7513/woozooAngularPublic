import { Component, OnInit } from '@angular/core';
import { PopupLivraisonService } from 'src/app/services/popup-livraison.service';

@Component({
  selector: 'app-header-secteurs-details',
  templateUrl: './header-secteurs-details.component.html',
  styleUrls: ['./header-secteurs-details.component.scss']
})
export class HeaderSecteursDetailsComponent implements OnInit {

  constructor(private PopupLivraisonService: PopupLivraisonService) { }

  ngOnInit(): void {
  }
  openPopup(){
    this.PopupLivraisonService.confirmDialog();
  }
  
}
