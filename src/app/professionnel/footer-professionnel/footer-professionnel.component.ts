import { Component, OnInit } from '@angular/core';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-footer-professionnel',
  templateUrl: './footer-professionnel.component.html',
  styleUrls: ['./footer-professionnel.component.scss']
})
export class FooterProfessionnelComponent implements OnInit {

  constructor(private data: SecteursService) { }

  ngOnInit(): void {
  }

  changeSecteur(el: string) {
    this.data.changeServiceSecteur(el);
  }
  
}
