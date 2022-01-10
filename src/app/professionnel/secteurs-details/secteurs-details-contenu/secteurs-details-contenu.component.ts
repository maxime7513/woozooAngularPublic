import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secteurs-details-contenu',
  templateUrl: './secteurs-details-contenu.component.html',
  styleUrls: ['./secteurs-details-contenu.component.scss']
})
export class SecteursDetailsContenuComponent implements OnInit {
  secteurVisible : string;

  constructor() {
    this.secteurVisible = "commerce";
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
