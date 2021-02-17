import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  apiUrl = 'api/admin/profils';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getProfils(){
    return this.http.get(this.apiUrl, {headers: {Accept: 'Application/json'}});
  }
}
