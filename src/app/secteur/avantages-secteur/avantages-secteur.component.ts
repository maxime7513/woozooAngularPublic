import { Component, HostListener, OnInit } from '@angular/core';
import { annotate } from 'rough-notation';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-avantages-secteur',
  templateUrl: './avantages-secteur.component.html',
  styleUrls: ['./avantages-secteur.component.scss']
})
export class AvantagesSecteurComponent implements OnInit {
  avantagesVisible : string;
  scrolled: boolean = false;
  notationOneTime: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let offreDetails = document.getElementById("avantages") as HTMLElement,
      miseDispositionOffset = offreDetails.offsetTop;
      this.scrolled = window.scrollY > (miseDispositionOffset - 400);
      if(this.scrolled && !this.notationOneTime){
        this.roughtNotation();
      }
  };
  
  constructor(private data: SecteursService) {
    this.avantagesVisible = this.data.secteur;
  }

  ngOnInit(): void { }

  changeAvantages(el: string){
    this.avantagesVisible = el;
  }

  roughtNotation(){
    let underline = annotate(document.querySelector('h2') as HTMLElement, { type: 'underline', color: '#0eb3b7', padding: 13 });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
  
}
