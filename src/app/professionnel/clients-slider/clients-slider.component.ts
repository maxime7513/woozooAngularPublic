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
        this.roughtNotationTitle();
      }
  };
  slides = [
    {entreprise: "Kyo Sushi", img: "./assets/img/professionnel/partenaire/kyoSushi.png"},
    {entreprise: "Rosebaie", img: "./assets/img/professionnel/partenaire/roseBaie.png"},
    {entreprise: "Black Pearl Music", img: "./assets/img/professionnel/partenaire/blackPearlMusic.png"},
    {entreprise: "Home Studio", img: "./assets/img/professionnel/partenaire/homeStudio.png"}
  ];
  slideConfig = {
    "slidesToShow": 4,
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
        breakpoint: 600,
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
      // {
      //   breakpoint: 1100,
      //   settings: {
      //     slidesToShow: 4
      //   }
      // },
    ]
  };
    
  constructor() {}

  ngOnInit(): void {
  }

  roughtNotationTitle(){
    let underline = annotate(document.querySelector('#clients h2 span') as HTMLHeadingElement , { type: 'underline', color: '#97eab4', strokeWidth: 15, padding: -3, iterations: 1, multiline: true });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
