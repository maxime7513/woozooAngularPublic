import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OffresService {
  
  offreDetails: BehaviorSubject<string>;

  constructor() {
    this.offreDetails = new BehaviorSubject('securite');
  }

  changeOffreDetails(el: string){
    this.offreDetails.next(el);
    setTimeout(() => { // scroller vers la section offre
      let offre = document.getElementById("offre_details") as HTMLCanvasElement;
      window.scrollTo({top: offre.offsetTop - 64, behavior: 'smooth'});
    }, 1000);
  }

}