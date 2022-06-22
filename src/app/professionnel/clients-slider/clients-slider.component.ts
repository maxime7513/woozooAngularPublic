import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-slider',
  templateUrl: './clients-slider.component.html',
  styleUrls: ['./clients-slider.component.scss']
})
export class ClientsSliderComponent implements OnInit {
  slides = [
    {img: "./assets/img/professionnel/partenaire/kyoSushi.png"},
    {img: "./assets/img/professionnel/partenaire/rocket.png"},
    {img: "./assets/img/professionnel/partenaire/roseBaie.png"},
    {img: "./assets/img/professionnel/partenaire/blackPearlMusic.png"},
    {img: "./assets/img/professionnel/partenaire/onlyPro.png"},
    {img: "./assets/img/professionnel/partenaire/homeStudio.png"},
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1, "autoplay": true};
    
  constructor() { }

  ngOnInit(): void {
  }

}
