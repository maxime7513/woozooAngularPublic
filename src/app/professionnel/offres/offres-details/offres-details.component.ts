import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-offres-details',
  templateUrl: './offres-details.component.html',
  styleUrls: ['./offres-details.component.scss']
})
export class OffresDetailsComponent implements OnInit {
  contenuVisible : string;
  scrolled: boolean = false;
  scrolledDepasse: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
      let offreDetails = document.getElementById("offre_details") as HTMLCanvasElement,
      offreDetailsOffset = offreDetails.offsetTop,
      offreDetailsHeight = offreDetails.offsetHeight;
      this.scrolled = window.scrollY > (offreDetailsOffset - 60);
      this.scrolledDepasse = window.scrollY > (offreDetailsOffset + offreDetailsHeight - 200);
  }

  constructor() { 
    this.contenuVisible = 'securite';
  }

  ngOnInit(): void {
  }

  // scroll(el: HTMLElement){ // function scroll
  //   let y = el.offsetTop;
  //   window.scrollTo({top: y - 64, behavior: 'smooth'});
  // }

  changeContenu(el: string){ // changer contenue quand click sur header offres-details (+ scroll)
    this.contenuVisible = el;
    let offre = document.getElementById("offre_details") as HTMLCanvasElement;
    window.scrollTo({top: offre.offsetTop - 64, behavior: 'smooth'});
  }
}
