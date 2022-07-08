import { Component, Input, OnInit } from '@angular/core';
import { annotate } from 'rough-notation';
import { SecteursService } from 'src/app/services/secteurs.service';

@Component({
  selector: 'app-contenu-secteur',
  templateUrl: './contenu-secteur.component.html',
  styleUrls: ['./contenu-secteur.component.scss']
})
export class ContenuSecteurComponent implements OnInit {
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

  constructor(private data: SecteursService) {
    this.secteurVisible = this.data.secteur;
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows": false,
    "autoplay": false,
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
  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    // if(this.secteurVisible == 'restaurant'){
      this.roughtNotation(this.secteurVisible);
    // }
  }

  changeSecteur(el:string){
    if(el != this.secteurVisible){
      let transitionSolutions = document.getElementById('transition_secteurs') as HTMLElement;
    
      transitionSolutions.classList.add('active');
      setTimeout(() => { // retirer la class au bout de 1s pour pouvoir la remettre infiniment
        transitionSolutions.classList.remove('active');
      }, 1000);
      setTimeout(() => { // decaler de 0.4s le changement de variable pour effet visuel
        this.secteurVisible = el;
        this.avantagesVisible.changeAvantages(el); // (avantages-secteur.component)
      }, 400);
  
      // if(el == 'restaurant'){
        this.roughtNotation(el);
      // }
    }
  }

  roughtNotation(elementId: string){
    setTimeout(() => {
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
