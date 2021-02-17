import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  apiUrl = 'api/admin/competences';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getCompetence(){
    return this.http.get(this.apiUrl, {headers: {Accept: 'Application/json'}});
  }
}
