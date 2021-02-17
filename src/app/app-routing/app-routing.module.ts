import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from '../auth/auth.component';
import {ListUserComponent} from '../users/list-user/list-user.component';
import {AddUserComponent} from '../users/add-user/add-user.component';
import {DetailsUserComponent} from '../users/details-user/details-user.component';
import {ListProfilComponent} from '../profils/list-profil/list-profil.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ListPromoComponent} from '../promos/list-promo/list-promo.component';
import {AddPromoComponent} from '../promos/add-promo/add-promo.component';
import {ListGroupeCompetenceComponent} from '../groupeCompetences/list-groupe-competence/list-groupe-competence.component';
import {AddGroupeCompetenceComponent} from '../groupeCompetences/add-groupe-competence/add-groupe-competence.component';
import {ListReferentielComponent} from '../referentiels/list-referentiel/list-referentiel.component';
import {AddReferentielComponent} from '../referentiels/add-referentiel/add-referentiel.component';
import {DetailReferentielComponent} from '../referentiels/detail-referentiel/detail-referentiel.component';
import {AddCompetencesComponent} from '../competences/add-competences/add-competences.component';
import {DetailCompetencesComponent} from '../competences/detail-competences/detail-competences.component';
import {ListProfilDeSortieComponent} from '../profilSortie/list-profil-de-sortie/list-profil-de-sortie.component';
import {DefaultComponent} from '../default/default.component';
import {AuthGuard} from '../auth.guard';
import {AddProfilComponent} from '../profils/add-profil/add-profil.component';
import {EdituserComponent} from '../users/edituser/edituser.component';
import {UtilisateurProfilComponent} from '../profils/utilisateur-profil/utilisateur-profil.component';
import {EditGroupecompetenceComponent} from '../groupeCompetences/edit-groupecompetence/edit-groupecompetence.component';
import {AddProfilDeSortieComponent} from '../profilSortie/add-profil-de-sortie/add-profil-de-sortie.component';
import {EditListProfilSortieComponent} from '../profilSortie/edit-list-profil-sortie/edit-list-profil-sortie.component';
import {ListerCompetencesComponent} from '../competences/lister-competences/lister-competences.component';
import {EditCompetenceComponent} from '../competences/edit-competence/edit-competence.component';
import {EditReferentielComponent} from '../referentiels/edit-referentiel/edit-referentiel.component';



const routes: Routes = [
  {path: '', redirectTo: '/authentification', pathMatch: 'full'},
  {path: 'authentification', component: AuthComponent},
  {path: 'default', component: DefaultComponent, canActivate: [AuthGuard]},
  {path: 'users', component: ListUserComponent, canActivate: [AuthGuard]},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/:id', component: EdituserComponent},
  {path: 'users/detail/:id', component: DetailsUserComponent},
  {path: 'profils', component: ListProfilComponent},
  {path: 'profils/add', component: AddProfilComponent},
  {path: 'profils/:id/users', component: UtilisateurProfilComponent},
  {path: 'promos', component: ListPromoComponent},
  {path: 'promos/add', component: AddPromoComponent},
  {path: 'promos/:id', component: DetailsUserComponent},
  {path: 'referentiels', component: ListReferentielComponent},
  {path: 'referentiels/add', component: AddReferentielComponent},
  {path: 'referentiels/:id', component: EditReferentielComponent},
  {path: 'groupeCompetences', component: ListGroupeCompetenceComponent},
  {path: 'groupeCompetences/add', component: AddGroupeCompetenceComponent},
  {path: 'groupeCompetences/:id', component: EditGroupecompetenceComponent},
  {path: 'competences', component: ListerCompetencesComponent},
  {path: 'competences/add', component: AddCompetencesComponent},
  {path: 'competences/:id', component: EditCompetenceComponent},
  {path: 'profilSortie', component: ListProfilDeSortieComponent},
  {path: 'profilSortie/add', component: AddProfilDeSortieComponent},
  {path: 'profilSortie/:id', component: EditListProfilSortieComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
