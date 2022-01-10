import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { SecteurComponent } from './secteur/secteur.component';

// const routes: Routes = [
//   {path: '' , component: HomePageComponent},
//   {path: 'professionnel' , component: ProfessionnelComponent},
// ];

const routes: Routes = [
  { path: '', component: HomePageComponent , data: {animation: 'Home'} },
  { path: 'professionnel', component: ProfessionnelComponent , data: {animation: 'Professionnel'} },
  { path: 'secteur', component: SecteurComponent , data: {animation: 'Secteur'} },
  // { path: 'coursier', component: CoursierComponent , data: {animation: 'Coursier'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
