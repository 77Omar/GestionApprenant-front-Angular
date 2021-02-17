import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ListProfilComponent } from './profils/list-profil/list-profil.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { DetailsUserComponent } from './users/details-user/details-user.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { AddPromoComponent } from './promos/add-promo/add-promo.component';
import { ListPromoComponent } from './promos/list-promo/list-promo.component';
import { DetailPromoComponent } from './promos/detail-promo/detail-promo.component';
import { AddGroupeCompetenceComponent } from './groupeCompetences/add-groupe-competence/add-groupe-competence.component';
import { ListGroupeCompetenceComponent } from './groupeCompetences/list-groupe-competence/list-groupe-competence.component';
import { DetailGroupeCompetenceComponent } from './groupeCompetences/detail-groupe-competence/detail-groupe-competence.component';
import { AddReferentielComponent } from './referentiels/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './referentiels/list-referentiel/list-referentiel.component';
import { DetailReferentielComponent } from './referentiels/detail-referentiel/detail-referentiel.component';
import { AddCompetencesComponent } from './competences/add-competences/add-competences.component';
import { DetailCompetencesComponent } from './competences/detail-competences/detail-competences.component';
import { ListProfilDeSortieComponent } from './profilSortie/list-profil-de-sortie/list-profil-de-sortie.component';
import { DetailProfilDeSortieComponent } from './profilSortie/detail-profil-de-sortie/detail-profil-de-sortie.component';
import { ItemGroupeCompetenceComponent } from './groupeCompetences/list-groupe-competence/item-groupe-competence/item-groupe-competence.component';
import { ItemReferentielComponent } from './referentiels/list-referentiel/item-referentiel/item-referentiel.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DefaultComponent } from './default/default.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {AngularMaterialModule} from './material/angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EdituserComponent } from './users/edituser/edituser.component';
import { SummalizePipe } from './pipes/summalize.pipe';
import {UtilisateurProfilComponent} from './profils/utilisateur-profil/utilisateur-profil.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import { EditGroupecompetenceComponent } from './groupeCompetences/edit-groupecompetence/edit-groupecompetence.component';
import { EditListProfilSortieComponent } from './profilSortie/edit-list-profil-sortie/edit-list-profil-sortie.component';
import { AddProfilDeSortieComponent } from './profilSortie/add-profil-de-sortie/add-profil-de-sortie.component';
import {AvatarModule} from 'ngx-avatar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ItemPromoComponent } from './promos/list-promo/item-promo/item-promo.component';
import { ListerCompetencesComponent } from './competences/lister-competences/lister-competences.component';
import { EditCompetenceComponent } from './competences/edit-competence/edit-competence.component';
import { EditReferentielComponent } from './referentiels/edit-referentiel/edit-referentiel.component';
import {TagInputModule} from 'ngx-chips';
import {QRCodeModule} from 'angularx-qrcode';
import { FilterPipe } from './pipes/filter.pipe';
import { SuccesUpdateComponent } from './succes-update/succes-update.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JumbotronComponent,
    ListProfilComponent,
    AddProfilComponent,
    AddUserComponent,
    ListUserComponent,
    DetailsUserComponent,
    AuthComponent,
    PageNotFoundComponent,
    PipesComponent,
    AddPromoComponent,
    ListPromoComponent,
    DetailPromoComponent,
    AddGroupeCompetenceComponent,
    ListGroupeCompetenceComponent,
    DetailGroupeCompetenceComponent,
    AddReferentielComponent,
    ListReferentielComponent,
    DetailReferentielComponent,
    AddCompetencesComponent,
    DetailCompetencesComponent,
    ListProfilDeSortieComponent,
    DetailProfilDeSortieComponent,
    ItemGroupeCompetenceComponent,
    ItemReferentielComponent,
    RegisterComponent,
    DefaultComponent,
    SuccessDialogComponent,
    EdituserComponent,
    UtilisateurProfilComponent,
    SummalizePipe,
    EditGroupecompetenceComponent,
    EditListProfilSortieComponent,
    AddProfilDeSortieComponent,
    ItemPromoComponent,
    ListerCompetencesComponent,
    EditCompetenceComponent,
    EditReferentielComponent,
    FilterPipe,
    SuccesUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AngularMultiSelectModule,
    PdfViewerModule,
    AvatarModule,
    TagInputModule,
    QRCodeModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
