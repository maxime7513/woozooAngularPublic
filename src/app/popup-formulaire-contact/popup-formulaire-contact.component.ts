import { Component, OnInit } from '@angular/core';
import { faPhoneSquareAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-popup-formulaire-contact',
  templateUrl: './popup-formulaire-contact.component.html',
  styleUrls: ['./popup-formulaire-contact.component.scss']
})
export class PopupFormulaireContactComponent implements OnInit {
  phoneIcon = faPhoneSquareAlt;
  paperPlaneIcon = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
