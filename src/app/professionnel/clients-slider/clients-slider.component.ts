import { Component, HostListener, OnInit } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-clients-slider',
  templateUrl: './clients-slider.component.html',
  styleUrls: ['./clients-slider.component.scss']
})
export class ClientsSliderComponent implements OnInit {
  notationOneTime = false;
  scrolled: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let partenaires = document.querySelector("#clients") as HTMLElement;
      this.scrolled = window.scrollY > (partenaires.offsetTop - 400);
      if(this.scrolled && !this.notationOneTime){
        this.roughtNotationTittle();
      }
  };
  slides = [
    {img: "./assets/img/professionnel/partenaire/kyoSushi.png"},
    {img: "./assets/img/professionnel/partenaire/rocket.png"},
    {img: "./assets/img/professionnel/partenaire/roseBaie.png"},
    {img: "./assets/img/professionnel/partenaire/blackPearlMusic.png"},
    {img: "./assets/img/professionnel/partenaire/onlyPro.png"},
    {img: "./assets/img/professionnel/partenaire/homeStudio.png"},
  ];
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "autoplay": true,
    "arrow": false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
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
    let underline = annotate(document.querySelector('#clients h2') as HTMLHeadingElement , { type: 'underline', color: '#0eb3b7', strokeWidth: 2, padding: 2, iterations: 1, multiline: true });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
