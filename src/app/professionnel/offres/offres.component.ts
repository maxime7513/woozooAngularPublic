import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {
  @Input() contenuVisibleOffres: any;

  constructor() { }

  ngOnInit(): void {
  }

  contenuVisibleOffre(el: string) { // changer contenu visible offres-details
    this.contenuVisibleOffres.changeContenu(el);
  }
}
