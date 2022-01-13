import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-coursier',
  templateUrl: './footer-coursier.component.html',
  styleUrls: ['./footer-coursier.component.scss']
})
export class FooterCoursierComponent implements OnInit {
  @Input() popupInscription: any;

  constructor() { }

  ngOnInit(): void {
  }

  activerPopupInscription(){
    this.popupInscription.activerPopup();
  }
  
}
