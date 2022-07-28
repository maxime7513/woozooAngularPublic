import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-coursier',
  templateUrl: './presentation-coursier.component.html',
  styleUrls: ['./presentation-coursier.component.scss']
})
export class PresentationCoursierComponent implements OnInit {
  @Input() popupInscription: any;
  defaultImage: string = '/assets/img/coursier/phones_lazy.png';
  image: string = '/assets/img/coursier/phones.png';

  constructor() {
   }

  ngOnInit(): void {
    // HAUTEUR ::before accueil-coursier
    let besoinCoursier = (<HTMLElement>document.getElementById('besoin_coursier')).offsetHeight + 120,
    root = document.documentElement;
    root.style.setProperty('--bottom-before', '-' + besoinCoursier + 'px');
  }

  activerPopupInscription(){
    this.popupInscription.activerPopup();
  }

}
