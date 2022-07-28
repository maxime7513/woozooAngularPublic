import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursier-presentation',
  templateUrl: './coursier-presentation.component.html',
  styleUrls: ['./coursier-presentation.component.scss']
})
export class CoursierPresentationComponent implements OnInit {
  defaultImage: string = "./assets/img/professionnel/solutions/livreur_lazy.png";
  image: string = "./assets/img/professionnel/solutions/livreur.png";

  constructor() { }

  ngOnInit(): void {
  }

}
