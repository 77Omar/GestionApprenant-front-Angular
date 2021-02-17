import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  apiUrl = 'api/admin/groupeCompetence';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getgroupeCompetence(){
    return this.http.get(this.apiUrl, {headers: {Accept: 'Application/json'}});
  }
}
