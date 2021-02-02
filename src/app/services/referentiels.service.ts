import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferentielsService {

  apiUrl = 'http://127.0.0.1:8000/api/admin/referentiels';

  constructor(private http: HttpClient) { }
  getReferentiels(){
    return this.http.get(this.apiUrl, {headers: {Accept: 'Application/json'}});
  }
}
