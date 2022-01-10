import { Component, OnInit } from '@angular/core';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-contenu-secteur',
  templateUrl: './contenu-secteur.component.html',
  styleUrls: ['./contenu-secteur.component.scss']
})
export class ContenuSecteurComponent implements OnInit {
  secteurVisible : string;

  constructor(private data: SecteursService) {
    // this.secteurVisible = "commerce";
    this.secteurVisible = this.data.secteur;
  }

  ngOnInit(): void {
  }

  changeSecteur(el:string){
    let transitionSolutions = document.getElementById('transition_secteurs') as HTMLElement;
    transitionSolutions.classList.add('active');
    setTimeout(() => { // retirer la class au bout de 1s pour pouvoir la remettre infiniment
      transitionSolutions.classList.remove('active');
    }, 1000);
    setTimeout(() => { // decaler de 0.4s le changement de variable pour effet visuel
      this.secteurVisible = el;
    }, 400);
  }
  
}
