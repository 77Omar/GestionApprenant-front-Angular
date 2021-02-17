import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferentielsService {

  apiUrl = 'api/admin/referentiels';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getReferentiels(){
    return this.http.get(this.apiUrl, {headers: {Accept: 'Application/json'}});
  }
}
