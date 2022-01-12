import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-coursier',
  templateUrl: './presentation-coursier.component.html',
  styleUrls: ['./presentation-coursier.component.scss']
})
export class PresentationCoursierComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // HAUTEUR ::before accueil-coursier
    let besoinCoursier = (<HTMLElement>document.querySelector('.besoin_coursier')).offsetHeight + 120,
    root = document.documentElement;
    root.style.setProperty('--bottom-before', '-' + besoinCoursier + 'px');
  }

}
