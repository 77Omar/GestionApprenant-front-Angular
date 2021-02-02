import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from './Models/users.model';
import {Profils} from './Models/profils.model';
import {Competences} from './Models/competences.model';
import {groupeCompetences} from './Models/groupeCompetences.model';
import {Referentiel} from './Models/referentiel.model';
import {Promo} from './Models/promo.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private handleError: any;
  private base64Data: any;
  constructor( private http: HttpClient) { }
  users: any;
  groupsComp: any;
  referentiel: any;
  profils: any;
  competent: any;

  const; // @ts-ignore
  apiUrls = 'http://127.0.0.1:8000/api/admin/users';
  Url = 'http://127.0.0.1:8000/api/admin/profils';
  Urlgroup = 'http://127.0.0.1:8000/api/admin/groupeCompetence';
  urlpS = 'http://127.0.0.1:8000/api/admin/profilsortie';

  // List users
  getData(route: string): Observable<Users[]> {
    return this.http.get<Users[]>(route);
  }

  // AjoutUsers
  // tslint:disable-next-line:typedef
  create(route: string, body: FormData) {
    return this.http.post(route, body);
  }
  getUsersId(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrls}/${id}`);
  }
  // tslint:disable-next-line:typedef
  update(id: number, body: FormData){
    return this.http.post(`${(this.apiUrls)}/${id}`, body);
  }
  // tslint:disable-next-line:typedef Delete Users
  delete(id: number){
    return this.http.delete(`${(this.apiUrls)}/${id}`);
  }

  // List profil
  getprofilData(route: string): Observable<Profils[]> {
    return this.http.get<Profils[]>(route);
  }
  // Recup profil users
  getProfilUsers(id: number): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.Url}/${id}/users`);
  }
  // Update profil de sortie
  // tslint:disable-next-line:typedef
  UpdateProfiSortill(id: number, body: Profils){
   return this.http.put(`${(this.urlpS)}/${id}`, body);
  }

  // tslint:disable-next-line:typedef
  UpdateProfiSortilId(id: number): Observable<Profils>{
    return this.http.get<Profils>(`${(this.urlpS)}/${id}`);
  }

  // AjoutProfil
  // tslint:disable-next-line:typedef
  createprofil(route: string, body: Profils) {
    return this.http.post(route, body);
  }
  // tslint:disable-next-line:typedef
  deleteProfil(id: number){
    return this.http.delete(`${(this.Url)}/${id}`);
  }

  // Ajout Competences
  PostDataCompetences(route: string, body: Competences) {
    return this.http.post(route, body);
  }
  // List GroupeCompetences
  getAllgroupComp(route: string): Observable<groupeCompetences[]> {
    return this.http.get<groupeCompetences[]>(route);
  }

  // tslint:disable-next-line:typedef
  PostgroupComp(route: string, body: groupeCompetences) {
    return this.http.post(route, body);
  }
  // Modif groupeCompetences
  // tslint:disable-next-line:typedef
  UpdateGroupComp(id: number, body: groupeCompetences) {
    return this.http.put(`${(this.Urlgroup)}/${id}`, body);
  }
  getGroupCompId(id: number): Observable<groupeCompetences> {
    return this.http.get<groupeCompetences>(`${this.Urlgroup}/${id}`);
  }
// List Referentiels
  getAllReferentiel(route: string): Observable<Referentiel[]> {
    return this.http.get<Referentiel[]>(route);
  }
  // Ajout Referntiels
  // tslint:disable-next-line:typedef
  PostReferentiels(route: string, body: FormData) {
    return this.http.post(route, body);
  }

  // Lister Promo
  getAllPromo(route: string): Observable<Promo[]> {
    return this.http.get<Promo[]>(route);
  }

}
