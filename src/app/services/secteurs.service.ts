import { Injectable } from '@angular/core';

@Injectable()
export class SecteursService {
  secteur: string;
  constructor() { 
    this.secteur = 'commerce';
  }
  
  changeSecteurService(el: string){
    this.secteur = el;
  }

}
