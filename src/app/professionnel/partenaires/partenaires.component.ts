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
        this.roughtNotation();
      }
  };
  constructor() { }

  ngOnInit(): void {
  }

  roughtNotation(){
    let underline = annotate(document.querySelector('#partenaires h2') as HTMLHeadingElement , { type: 'underline', color: '#9be8ff', strokeWidth: 4, padding: 10 });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
