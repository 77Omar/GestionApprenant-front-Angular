import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriService {

  constructor() { }

  // tslint:disable-next-line:typedef
   triUser(user){
      user.sort((a, b) => {
        if (a.firstName > b.firstName){
          return 1;
        }
        if (a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
   }

}
