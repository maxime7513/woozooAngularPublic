import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { SecteurComponent } from './secteur/secteur.component';
import { CoursierComponent } from './coursier/coursier.component';

const routes: Routes = [
  { path: '', component: HomePageComponent ,
    data: {
      animation: 'Home',
      seo: {
        title: 'Woozoo • Service de livraison rapide, flexible et sécurisée',
        metaTags: [
          { name: 'description', content: 'Woozo est le service de livraison qui vous connecte à la meilleur flotte de livreurs de Marseille. Faites livrer tous vos colis, Woozoo vous assure une livraison rapide, flexible et sécurisée.' },
          { property: 'og:title', content: 'Woozoo | Service de livraison rapide, flexible et sécurisée' },
          { proprety: 'og:description', content: 'Woozo est le service de livraison qui vous connecte à la meilleur flotte de livreurs de Marseille. Faites livrer tous vos colis, Woozoo vous assure une livraison rapide, flexible et sécurisée.' },
        ]
      }
    }
  },
  { path: 'professionnel', component: ProfessionnelComponent ,
    data: {
      animation: 'Professionnel',
      seo: {
        title: 'Livraison pour tous les commerces et entreprises',
        metaTags: [
          { name: 'description', content: 'Connectez-vous à la meilleur flotte de livreurs de votre ville. Woozoo est le service de livraison instantané pour tous les commerces et entreprises' },
          { property: 'og:title', content: 'Woozoo | Livraison pour tous les commerces et entreprises' },
          { proprety: 'og:description', content: 'Connectez-vous à la meilleur flotte de livreurs de votre ville. Woozoo est le service de livraison instantané pour tous les commerces et entreprises' },
        ]
      }
    } 
  },
  { path: 'secteur', component: SecteurComponent ,
    data: {
      animation: 'Secteur',
      seo: {
        title: "Nos secteurs d'activité",
        metaTags: [
          { name: 'description', content: 'Woozo est la solution de livraison instantané pour tous les commerces et entreprises.' },
          { property: 'og:title', content: "Woozoo | Nos secteurs d'activité" },
          { proprety: 'og:description', content: 'Woozo est la solution de livraison instantané pour tous les commerces et entreprises.' },
        ]
      }
    }
  },
  { path: 'coursier', component: CoursierComponent ,
    data: {
      animation: 'Coursier',
      seo: {
        title: "Devenez coursier partenaire Woozoo",
        metaTags: [
          { name: 'description', content: "Rouler avec woozoo, c'est la liberté de livrer où vous voulez et quand vous voulez. Rejoins-nous dès maintenant!" },
          { property: 'og:title', content: 'Devenez coursier partenaire Woozoo' },
          { proprety: 'og:description', content: "Rouler avec woozoo, c'est la liberté de livrer où vous voulez et quand vous voulez. Rejoins-nous dès maintenant!" },
        ]
      }
    }
  },
  {
    path: 'mentionsLegales',
    loadChildren: () => import('./modules/mentions-legales/mentions-legales.module').then(m => m.MentionsLegalesModule),
    data: {
      animation: 'MentionsLegales',
      seo: {
        title: "Woozoo • Mentions légales",
        metaTags: [
          { name: 'description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
          { property: 'og:title', content: 'Woozoo • Mentions légales' },
          { proprety: 'og:description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
        ]
      }
    }
  },
  {
    path: 'confidentialite',
    loadChildren: () => import('./modules/confidentialite/confidentialite.module').then(m => m.ConfidentialiteModule),
    data: {
      animation: 'Confidentialite',
      seo: {
        title: "Woozoo • Confidentialité",
        metaTags: [
          { name: 'description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
          { property: 'og:title', content: 'Woozoo • Confidentialité' },
          { proprety: 'og:description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
        ]
      }
    }
  },
  {
    path: 'conditionsGenerales',
    loadChildren: () => import('./modules/conditions/conditions.module').then(m => m.ConditionsModule),
    data: {
      animation: 'ConditionsGenerales',
      seo: {
        title: "Woozoo • Conditions générales",
        metaTags: [
          { name: 'description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
          { property: 'og:title', content: 'Woozoo • Conditions générales' },
          { proprety: 'og:description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
        ]
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
