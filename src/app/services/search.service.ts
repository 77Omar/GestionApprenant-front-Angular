import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private StringSource = new BehaviorSubject('');
  currentSearch = this.StringSource.asObservable();

  constructor() { }
  // tslint:disable-next-line:typedef
  changeValue(message: string){
    this.StringSource.next(message);
  }
}
