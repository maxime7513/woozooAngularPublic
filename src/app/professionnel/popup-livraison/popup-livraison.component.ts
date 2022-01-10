import { Component, OnInit } from '@angular/core';
import { faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-popup-livraison',
  templateUrl: './popup-livraison.component.html',
  styleUrls: ['./popup-livraison.component.scss']
})
export class PopupLivraisonComponent implements OnInit  {
  // icone fontawesome
  phoneIcon = faPhoneSquareAlt;

  constructor(){}

  ngOnInit(): void {
  }


}
