import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { SecteurComponent } from './secteur/secteur.component';
import { CoursierComponent } from './coursier/coursier.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { ConditionsGeneralesComponent } from './conditions-generales/conditions-generales.component';

const routes: Routes = [
  { path: '', component: HomePageComponent ,
    data: {
      animation: 'Home',
      seo: {
        title: 'Woozoo | Solution de livraison rapide, flexible et sécurisée',
        metaTags: [
          { name: 'description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
          { property: 'og:title', content: 'Woozoo | Solution de livraison rapide, flexible et sécurisée' },
          { proprety: 'og:description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
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
          { name: 'description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
          { property: 'og:title', content: 'Woozoo | Livraison pour tous les commerces et entreprises' },
          { proprety: 'og:description', content: 'Woozo est la solution de livraison qui vous connecte à la meilleur flotte de livreurs de votre ville.' },
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
  { path: 'mentionsLegales', component: MentionsLegalesComponent , data: {animation: 'MentionsLegales'} },
  { path: 'confidentialite', component: ConfidentialiteComponent , data: {animation: 'Confidentialite'}},
  { path: 'conditionsGenerales', component: ConditionsGeneralesComponent , data: {animation: 'ConditionsGenerales'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
