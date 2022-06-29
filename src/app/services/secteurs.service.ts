import { Injectable } from '@angular/core';

@Injectable()
export class SecteursService {
  secteur: string;
  constructor() { 
    this.secteur = 'restaurant';
  }
  
  changeSecteurService(el: string){
    this.secteur = el;
  }

}
