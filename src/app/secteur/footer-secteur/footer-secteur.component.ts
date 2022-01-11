import { Component, OnInit } from '@angular/core';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-footer-secteur',
  templateUrl: './footer-secteur.component.html',
  styleUrls: ['./footer-secteur.component.scss']
})
export class FooterSecteurComponent implements OnInit {

  constructor(private data: SecteursService) { }

  ngOnInit(): void {
  }

  changeSecteur(el: string) {
    this.data.changeSecteurService(el);
  }

}
