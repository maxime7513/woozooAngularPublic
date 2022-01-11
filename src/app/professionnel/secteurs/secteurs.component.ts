import { Component, OnInit } from '@angular/core';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-secteurs',
  templateUrl: './secteurs.component.html',
  styleUrls: ['./secteurs.component.scss']
})
export class SecteursComponent implements OnInit {

  constructor(private data: SecteursService) { }

  ngOnInit(): void {
  }
  
  changeSecteur(el: string) {
    this.data.changeSecteurService(el);
  }
}
