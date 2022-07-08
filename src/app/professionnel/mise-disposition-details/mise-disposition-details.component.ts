import { Component, HostListener, OnInit } from '@angular/core';
import { annotate, annotationGroup } from 'rough-notation';

@Component({
  selector: 'app-mise-disposition-details',
  templateUrl: './mise-disposition-details.component.html',
  styleUrls: ['./mise-disposition-details.component.scss']
})
export class MiseDispositionDetailsComponent implements OnInit {
  scrolled: boolean = false;
  notationOneTime: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let offreDetails = document.getElementById("mise_disposition") as HTMLCanvasElement,
      miseDispositionOffset = offreDetails.offsetTop;
      // miseDispositionHeight = offreDetails.offsetHeight;
      this.scrolled = window.scrollY > (miseDispositionOffset - 100);

      if(this.scrolled && !this.notationOneTime){
        this.roughtNotation();
      }
  };
  slides: string[] = ['mockup-mise_a_disposition1', 'mockup-mise_a_disposition2', 'mockup-mise_a_disposition3'];
  imageShowSlides: string = this.slides[0];
  indexSlider: number = 1;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.caroussel();
    }, 3000);
  }

  roughtNotation(){
    const a1 = annotate(document.getElementById('besoins') as HTMLElement, { type: 'underline', color: '#0eb3b7', padding: 2, multiline: true }),
    a2 = annotate(document.getElementById('forme') as HTMLElement, { type: 'box', color: 'var(--blue-secondary)', padding: [1, 3] }),
    a3 = annotate(document.getElementById('gerer') as HTMLElement, { type: 'underline', color: 'var(--blue-secondary)', padding: 2, multiline: true }),
    a4 = annotate(document.getElementById('astreinte') as HTMLElement, { type: 'circle', color: '#0eb3b7', padding: [7, 10], animationDuration: 1000}),
    agroupe = annotationGroup([a1, a2, a3, a4]);
    
    agroupe.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }

  caroussel(){
    this.imageShowSlides = this.slides[this.indexSlider];
    this.indexSlider++;
    if(this.indexSlider >= this.slides.length){
      this.indexSlider = 0;
    }
  }

}
