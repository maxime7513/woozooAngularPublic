import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { annotate, annotationGroup } from 'rough-notation';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-mise-disposition-details',
  templateUrl: './mise-disposition-details.component.html',
  styleUrls: ['./mise-disposition-details.component.scss']
})
export class MiseDispositionDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  scrolled: boolean = false;
  scrolledTittle: boolean = false;
  notationOneTime: boolean = false;
  notationOneTimeTittle: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let offreDetails = document.getElementById("mise_disposition") as HTMLCanvasElement,
      miseDispositionOffset = offreDetails.offsetTop;
      // miseDispositionHeight = offreDetails.offsetHeight;
      this.scrolled = window.scrollY > (miseDispositionOffset - 100);
      this.scrolledTittle = window.scrollY > (miseDispositionOffset - 400);

      if(this.scrolledTittle && !this.notationOneTimeTittle){
        this.roughtNotationTittle();
      }
      if(this.scrolled && !this.notationOneTime){
        this.roughtNotation();
      }
  };
  defautImage: string = './assets/img/professionnel/presentation/mockup-mise_a_disposition_lazy.png';
  slides: string[] = ['./assets/img/professionnel/presentation/mockup-mise_a_disposition1.png', './assets/img/professionnel/presentation/mockup-mise_a_disposition2.png', './assets/img/professionnel/presentation/mockup-mise_a_disposition3.png'];
  imageShowSlides: string = this.slides[0];
  indexSlider: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(3000)
    .subscribe(x => { this.caroussel(); });
  }

  roughtNotation(){
    const a1 = annotate(document.getElementById('besoins') as HTMLElement, { type: 'underline', color: '#0eb3b7', padding: 2, multiline: true }),
    a2 = annotate(document.getElementById('forme') as HTMLElement, { type: 'underline', color: 'var(--blue-secondary)', padding: 2, multiline: true  }),
    a3 = annotate(document.getElementById('gerer') as HTMLElement, { type: 'underline', color: 'var(--blue-secondary)', padding: 2, multiline: true }),
    a4 = annotate(document.getElementById('astreinte') as HTMLElement, { type: 'underline', color: '#0eb3b7', padding: 2, animationDuration: 1000}),
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

  roughtNotationTittle(){
    let underline = annotate(document.querySelector('#mise_disposition h2') as HTMLHeadingElement , { type: 'underline', color: '#9be8ff', strokeWidth: 15, padding: -4, iterations: 1 });
    underline.show();
    this.notationOneTimeTittle = true; // la fonction est effectué et ne peut pas etre relancé
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
