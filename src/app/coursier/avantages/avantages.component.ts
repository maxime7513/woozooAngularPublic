import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-avantages',
  templateUrl: './avantages.component.html',
  styleUrls: ['./avantages.component.scss']
})
export class AvantagesComponent implements OnInit {
  
  chevronDown = faChevronDown;
  avantages: Array<{image: string, titre: string, texte: string}> = [
    {image: "euro.svg",
    titre: "Une rémunération équitable",
    texte: "Nous garantissons à nos livreurs partenaire une rémunération juste et équitable."
    },
    {image: "calendrier.svg",
    titre: "Gérez votre planning",
    texte: "Positionnez vous sur les courses de votre choix, selon vos disponibilités. Nous garantissons votre indépendance."
    },
    {image: "euro3.svg",
    titre: "Optimisez vos revenus",
    texte: "Compléter vos revenus en livrant même pendant les heures creuses de livraison. Notre service est accessible de 7h00 à minuit 7 jours sur 7."
    },
    {image: "axa.png",
    titre: "Notre partenaire d'assurance",
    texte: "Vous bénéficiez de notre assurance professionnelle, elle vous couvrira en cas d'accidents pendant votre activité sur notre plateforme."
    },
    {image: "call-center.svg",
    titre: "Assistance en cas de besoin",
    texte: "Notre équipe vous accompagne tout le long de votre activité, reste disponible et à votre écoute à chaque livraison."
    },
    {image: "tenue.svg",
    titre: "Un équipement vous est offert",
    texte: "Nous vous fournissons tout l’équipement nécessaire (sac et tenue), totalement personnalisé pour apporter un côté fun à vos livraisons."
    }
  ];
  // getScreenWidth: any;
  constructor() {
    // this.getScreenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  showDetails(el: number, el2: number){
    // if(this.getScreenWidth < 700){
      let chevron = <HTMLElement>document.querySelector('#avantages div:nth-of-type('+ el +') div:nth-of-type('+ el2 +') fa-icon svg');
      let detailsAvantages = <HTMLElement>document.querySelector('#avantages div:nth-of-type('+ el +') div:nth-of-type('+ el2 +') p:last-of-type');
      chevron.classList.toggle('rotate');
      detailsAvantages.classList.toggle('show');
    // }
  }
}
