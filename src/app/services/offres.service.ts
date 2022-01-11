import { Injectable } from '@angular/core';

@Injectable()
export class OffresService {
  offre: string;

  constructor() {
    this.offre = "securite";
  }

  changeSecteurOffre(el: string){
    this.offre = el;
    setTimeout(() => { // scroller vers la section offre
      let offre = document.getElementById("offre_details") as HTMLCanvasElement;
      window.scrollTo({top: offre.offsetTop - 64, behavior: 'smooth'});
    }, 1000);
  }

}
