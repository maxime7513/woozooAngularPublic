import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {
  clients: Array<{nom: string, enseigne: string, img: string, texte: string}> = [
    {nom: "Beti",
    enseigne: "Restaurant LA VISTA",
    img: "femme1.jpg",
    texte: "J'utilise woozoo pour la livraison express au prix standard, c'est un bonheur de travailler avec eux."
    },
    {nom: "Louis",
    enseigne: "magasin BRUT",
    img: "homme1.jpg",
    texte: "J'arrive à livrer mes clients pour le jour même, ils sont ravis depuis que je fais appel à woozoo."
    },
    {nom: "Thierry",
    enseigne: "Restaurant Le lion d'or",
    img: "homme3.png",
    texte: "Très content du service de woozoo depuis 6mois, jamais déçu! Je recommande."
    },
    {nom: "Isabelle",
    enseigne: "magasin EPIL",
    img: "femme1.jpg",
    texte: "J'utilise woozoo pour la livraison express au prix standard, c'est un bonheur de travailler avec eux."
    },
    {nom: "Franck",
    enseigne: "Restaurant KIOSUSHI",
    img: "homme2.jpg",
    texte: "Très content du service de woozoo depuis 6mois, jamais déçu! Je recommande."
    },
    {nom: "Catia",
    enseigne: "Magasin EMILO",
    img: "homme1.jpg",
    texte: "J'arrive à livrer mes clients pour le jour même, ils sont ravis depuis que je fais appel à woozoo."
    }
  ];
  
  constructor() { }
}
