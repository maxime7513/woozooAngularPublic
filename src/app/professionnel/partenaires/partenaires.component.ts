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
  slides = [
    {img: "./assets/img/professionnel/partenaire/french-tech.png"},
    {img: "./assets/img/professionnel/partenaire/cci.png"},
    {img: "./assets/img/professionnel/partenaire/accelerateur.png"},
    {img: "./assets/img/professionnel/partenaire/imm.png"},
    {img: "./assets/img/professionnel/partenaire/bpi.png"},
    {img: "./assets/img/professionnel/partenaire/axa.png"},
    {img: "./assets/img/professionnel/partenaire/capital-innovation.png"},
  ];
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "autoplay": true,
    "arrow": false,
    "pauseOnFocus": false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4
        }
      },
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  roughtNotationTittle(){
    let underline = annotate(document.querySelector('#partenaires h2') as HTMLHeadingElement , { type: 'underline', color: '#97eab4', strokeWidth: 15, padding: -4, iterations: 1, multiline: true });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
