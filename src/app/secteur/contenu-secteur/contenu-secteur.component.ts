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
  getScreenWidth: any;

  constructor(private data: SecteursService) {
    this.secteurVisible = this.data.secteur;
    this.getScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.roughtNotation(this.secteurVisible);
    if(this.getScreenWidth < 600){
      const prevButton = document.querySelector('#header_secteurs_details .slick-prev') as HTMLElement;
      const nextButton = document.querySelector('#header_secteurs_details .slick-next') as HTMLElement;
      prevButton.addEventListener('click', async () => {
        prevButton.style.opacity = '0.3';
        prevButton.style.pointerEvents = 'none';
        this.prevSecteur();
        setTimeout(() => {
          prevButton.style.opacity = '1';
          prevButton.style.pointerEvents = 'all';
        }, 1000);
      });
      nextButton.addEventListener('click', () => {
        nextButton.style.opacity = '0.3';
        nextButton.style.pointerEvents = 'none';
        this.nextSecteur();
        setTimeout(() => {
          nextButton.style.opacity = '1';
          nextButton.style.pointerEvents = 'all';
        }, 1000);
      })
    }
  }

  prevSecteur(){
      let indiceCurrentSecteur = this.secteurs.findIndex(element => element.value == this.secteurVisible);
      if(indiceCurrentSecteur == 0){
        indiceCurrentSecteur = 4;
      }
      const prevSecteur = this.secteurs[indiceCurrentSecteur - 1].value;
      this.changeSecteur(prevSecteur)
  }
  nextSecteur(){
    let indiceCurrentSecteur = this.secteurs.findIndex(element => element.value == this.secteurVisible);
    if(indiceCurrentSecteur == 3){
      indiceCurrentSecteur = -1;
    }
    const nextSecteur = this.secteurs[indiceCurrentSecteur + 1].value;
    this.changeSecteur(nextSecteur)
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
      let underline;
      if(elementId == 'luxe'){
        underline = annotate(document.getElementById(elementId) as HTMLElement, { type: 'box', color: '#0eb3b7', padding: [7,10], multiline: true });
      }else{
        underline = annotate(document.getElementById(elementId) as HTMLElement, { type: 'underline', color: '#0eb3b7', padding: 2, multiline: true });
      }
      underline.show();
    }, 3500);
  }
  
}
