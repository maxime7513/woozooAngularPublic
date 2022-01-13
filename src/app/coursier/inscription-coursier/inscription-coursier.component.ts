import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-coursier',
  templateUrl: './inscription-coursier.component.html',
  styleUrls: ['./inscription-coursier.component.scss']
})
export class InscriptionCoursierComponent implements OnInit {
  afficherPopup: boolean;
  constructor() {
    this.afficherPopup = false;
  }

  ngOnInit(): void {
  }

  activerPopup(){
    this.afficherPopup = true;
  }

}
