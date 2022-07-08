import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valeurs',
  templateUrl: './valeurs.component.html',
  styleUrls: ['./valeurs.component.scss']
})
export class ValeursComponent implements OnInit {
  valeurs: Array<{img: string, titre: string, texte: string}> = [
    {img: "securite",
    titre: "Sécurité",
    texte: "Nous vous garantissons une livraison 100% sécurisée, grâce à un process établie",
    },
    {img: "rapide",
    titre: "Urgence",
    texte: "La réactivité de notre service, vous garantie une livraison toujours plus rapide",
    },
    {img: "qualite",
    titre: "Qualité",
    texte: "Nous formons nos coursiers partenaires pour vous assurer une livraison de qualité",
    },
    {img: "equitable",
    titre: "Equité",
    texte: "Le bien être et la valorisation de nos coursier sont au coeur de nos préoccupations",
    }
  ];
  
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay": true,
    "arrows": false,
    responsive: [
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3
        }
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
