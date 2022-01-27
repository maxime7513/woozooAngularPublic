import { Component, OnInit } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  constructor(private offresService: OffresService) { }

  ngOnInit(): void {
  }

  contenuVisibleOffre(el: string) { // changer contenu visible offres-details
    this.offresService.changeOffreDetails(el);
  }
}
