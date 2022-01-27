import { Component, OnInit, HostListener } from '@angular/core';
import { annotate, annotationGroup } from 'rough-notation';
import { BehaviorSubject } from 'rxjs';
import { OffresService } from 'src/app/services/offres.service';

@Component({
  selector: 'app-offres-details',
  templateUrl: './offres-details.component.html',
  styleUrls: ['./offres-details.component.scss']
})
export class OffresDetailsComponent implements OnInit {
  contenuVisible : string = "";
  scrolled: boolean = false;
  scrolledDepasse: boolean = false;
  notationOneTime: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() { // classe active sur header au scroll
      let offreDetails = document.getElementById("offre_details") as HTMLCanvasElement,
      offreDetailsOffset = offreDetails.offsetTop,
      offreDetailsHeight = offreDetails.offsetHeight;
      this.scrolled = window.scrollY > (offreDetailsOffset - 60);
      this.scrolledDepasse = window.scrollY > (offreDetailsOffset + offreDetailsHeight - 200);

      if(this.contenuVisible == 'securite' && this.scrolled == true && this.notationOneTime == false){
        this.roughtNotation();
      }
  }

  constructor(private offreService: OffresService) { 
    this.offreService.offreDetails.subscribe((res) => {
      this.contenuVisible = res;
    });

  }

  ngOnInit(): void {}

  changeContenu(el: string){ // changer contenue quand click sur header offres-details (+ scroll)
    this.contenuVisible = el;
    let offre = document.getElementById("offre_details") as HTMLCanvasElement;
    window.scrollTo({top: offre.offsetTop - 59, behavior: 'smooth'});
    
    if(el == 'securite' && this.notationOneTime == false){ // lancer fonction roughtNotation() si categorie securite et fonction pas encore effectué
      setTimeout(() => {
        this.roughtNotation();
      }, 1500);
    }else if(el != 'securite'){
      this.notationOneTime = false; // remettre variable à false pour pouvoir relancer la fonction roughtNotation() 
    }
  }

  roughtNotation(){
    const a1 = annotate(document.getElementById('scelle') as HTMLElement, { type: 'box', color: 'var(--blue-secondary)', padding: [1, 3] });
    const a2 = annotate(document.getElementById('qrcode') as HTMLElement, { type: 'box', color: 'var(--blue-secondary)', padding: [1, 3] });
    const a3 = annotate(document.getElementById('code4') as HTMLElement, { type: 'box', color: '#0eb3b7', padding: [1, 3] });
    const a4 = annotate(document.getElementById('remp') as HTMLElement, { type: 'underline', color: 'var(--blue-secondary)', padding: 2 });
    const a5 = annotate(document.getElementById('dixm') as HTMLElement, { type: 'circle', color: '#0eb3b7', padding: 8, animationDuration: 1000});
    const agroupe = annotationGroup([a1, a2, a3, a4, a5]);
    agroupe.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
