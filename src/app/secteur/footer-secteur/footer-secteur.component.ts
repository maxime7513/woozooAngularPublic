import { Component, OnInit } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-footer-secteur',
  templateUrl: './footer-secteur.component.html',
  styleUrls: ['./footer-secteur.component.scss']
})
export class FooterSecteurComponent implements OnInit {

  constructor(private offreService: OffresService) { }

  ngOnInit(): void {
  }

  changeOffre(el: string) {
    this.offreService.changeOffreDetails(el);
  }

}
