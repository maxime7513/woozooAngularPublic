import { Component, HostListener, OnInit } from '@angular/core';
import { annotate } from 'rough-notation';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-secteurs',
  templateUrl: './secteurs.component.html',
  styleUrls: ['./secteurs.component.scss']
})
export class SecteursComponent implements OnInit {
  notationOneTime = false;
  scrolled: boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
      let partenaires = document.querySelector("#benefices") as HTMLElement;
      this.scrolled = window.scrollY > (partenaires.offsetTop - 400);
      if(this.scrolled && !this.notationOneTime){
        this.roughtNotationTittle();
      }
  };
  defaultImageLuxe: string = 'assets/img/professionnel/secteurs/luxe_lazy.png';
  imageLuxe: string = 'assets/img/professionnel/secteurs/luxe.png';
  defautImageRestaurant: string = 'assets/img/professionnel/secteurs/sushi_lazy.png';
  imageRestaurant: string = 'assets/img/professionnel/secteurs/sushi.png';
  defautImageLiberale: string = 'assets/img/professionnel/secteurs/liberale_lazy.png';
  imageLiberale: string = 'assets/img/professionnel/secteurs/liberale.png';
  defautImageInter: string = 'assets/img/professionnel/secteurs/double_arrow_lazy.png';
  imageInter: string = 'assets/img/professionnel/secteurs/double_arrow.png';

  constructor(private data: SecteursService) { }

  ngOnInit(): void {
  }
  
  changeSecteur(el: string) {
    this.data.changeSecteurService(el);
  }

  roughtNotationTittle(){
    let underline = annotate(document.querySelector('#benefices h2') as HTMLHeadingElement , { type: 'underline', color: '#9be8ff', strokeWidth: 15, padding: -4, iterations: 1 });
    underline.show();
    this.notationOneTime = true; // la fonction est effectué et ne peut pas etre relancé
  }
}
