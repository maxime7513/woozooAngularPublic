import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { SecteurComponent } from './secteur/secteur.component';
import { CoursierComponent } from './coursier/coursier.component';
import { WoozooBoxComponent } from './woozoo-box/woozoo-box.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ConfidentialiteComponent } from './confidentialite/confidentialite.component';
import { ConditionsGeneralesComponent } from './conditions-generales/conditions-generales.component';

const routes: Routes = [
  { path: '', component: HomePageComponent , data: {animation: 'Home'} },
  { path: 'professionnel', component: ProfessionnelComponent , data: {animation: 'Professionnel'} },
  { path: 'secteur', component: SecteurComponent , data: {animation: 'Secteur'} },
  { path: 'coursier', component: CoursierComponent , data: {animation: 'Coursier'} },
  { path: 'woozooBox', component: WoozooBoxComponent , data: {animation: 'WoozooBox'} },
  { path: 'mentionsLegales', component: MentionsLegalesComponent , data: {animation: 'MentionsLegales'} },
  { path: 'confidentialite', component: ConfidentialiteComponent , data: {animation: 'Confidentialite'}},
  { path: 'conditionsGenerales', component: ConditionsGeneralesComponent , data: {animation: 'ConditionsGenerales'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
