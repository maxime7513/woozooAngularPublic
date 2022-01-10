import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-slider',
  templateUrl: './clients-slider.component.html',
  styleUrls: ['./clients-slider.component.scss']
})
export class ClientsSliderComponent implements OnInit {
  slides = [
    {img: "./assets/img/professionnel/partenaire/but.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire1.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire2.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire3.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire4.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire5.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire6.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire7.png"},
    {img: "./assets/img/professionnel/partenaire/partenaire8.png"}
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1, "autoplay": true};
    
  constructor() { }

  ngOnInit(): void {
  }

}
