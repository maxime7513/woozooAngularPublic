import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { annotate } from 'rough-notation';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-contenu-secteur',
  templateUrl: './contenu-secteur.component.html',
  styleUrls: ['./contenu-secteur.component.scss']
})
export class ContenuSecteurComponent implements OnInit, AfterViewInit {
  secteurVisible: string;
  @Input() avantagesVisible: any;
  secteurs: Array<{value: string, viewValue: string}> = [
    {value: "restaurant",
    viewValue: "Restaurant"
    },
    {value: "luxe",
    viewValue: "Retails & Luxe"
    },
    {value: "liberale",
    viewValue: "Profession libérale"
    },
    {value: "inter-magasin",
    viewValue: "Inter-magasin"
    }
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows": false,
    "autoplay": false,
    "swipe": false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      }
    ]
  }

  cheminSrc: string = "assets/img/professionnel/solutions/"
  defaultImageRestaurant: string = this.cheminSrc + "restaurant_lazy.png";
  imageRestaurant: string = this.cheminSrc + "restaurant.png";
  defaultImageLuxe: string = this.cheminSrc + "luxe_lazy.png";
  imageLuxe: string = this.cheminSrc + "luxe.png";
  defaultImageLiberale: string = this.cheminSrc + "liberale_lazy.png";
  imageLiberale: string = this.cheminSrc + "liberale.png";
  defaultImageInterMagasin: string = this.cheminSrc + "inter-magasin_lazy.png";
  imageInterMagasin: string = this.cheminSrc + "inter-magasin.png";

  constructor(private data: SecteursService) {
    this.secteurVisible = this.data.secteur;
  }

  ngOnInit(): void {
    this.reorderTab()
  }

  ngAfterViewInit(): void {
    this.roughtNotation(this.secteurVisible);
  }

  reorderTab(){
    let indiceCurrentSecteur = this.secteurs.findIndex(element => element.value == this.secteurVisible);
    let secteurData = this.secteurs[indiceCurrentSecteur];
    this.secteurs.splice(indiceCurrentSecteur,1) // supprimer du tableau
    this.secteurs.unshift(secteurData); // le remettre au début du tableau
  }

  changeSecteur(el:string){
    if(el == this.secteurVisible){
      return
    }
      let transitionSolutions = document.getElementById('transition_secteurs') as HTMLElement;
    
      transitionSolutions.classList.add('active');
      setTimeout(() => { // retirer la class au bout de 1s pour pouvoir la remettre infiniment
        transitionSolutions.classList.remove('active');
      }, 1000);
      setTimeout(() => { // decaler de 0.4s le changement de variable pour effet visuel
        this.secteurVisible = el;
        this.avantagesVisible.changeAvantages(el); // (avantages-secteur.component)
      }, 400);
  
      this.roughtNotation(el);
  }

  roughtNotation(elementId: string){
    setTimeout(() => {
      if(this.secteurVisible != elementId){ // utilisateur a changer de secteurs avant le debut de la fonction
        return
      }
      let underline = annotate(document.getElementById(elementId) as HTMLElement, { type: 'underline', color: '#0eb3b7', padding: 2, multiline: true });
      underline.show();
    }, 3500);
  }
  
}
