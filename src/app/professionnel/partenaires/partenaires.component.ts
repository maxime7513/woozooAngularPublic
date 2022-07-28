import { Component, HostListener, OnInit } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {
  notationOneTime = false;
  scrolled: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let partenaires = document.querySelector("#partenaires") as HTMLElement;
      this.scrolled = window.scrollY > (partenaires.offsetTop - 400);
      if(this.scrolled && !this.notationOneTime){
        this.roughtNotationTittle();
      }
  };
  defautImage1: string = './assets/img/professionnel/partenaire/french-tech_lazy.png';
  image1: string = './assets/img/professionnel/partenaire/french-tech.png';
  defautImage2: string = './assets/img/professionnel/partenaire/accelerateur_lazy.png';
  image2: string = './assets/img/professionnel/partenaire/accelerateur.png';
  defautImage3: string = './assets/img/professionnel/partenaire/axa_lazy.png';
  image3: string = './assets/img/professionnel/partenaire/axa.png';
  defautImage4: string = './assets/img/professionnel/partenaire/cci_lazy.png';
  image4: string = './assets/img/professionnel/partenaire/cci.png';
  
  constructor() { }

  ngOnInit(): void {
  }

  roughtNotationTittle(){
    let underline = annotate(document.querySelector('#partenaires h2') as HTMLHeadingElement , { type: 'underline', color: '#97eab4', strokeWidth: 15, padding: -4, iterations: 1, multiline: true });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
