import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  navigatePath: any;

  constructor( private http: HttpClient, private router: Router) { }

  // tslint:disable-next-line:typedef
  gettokenlogin(user){
    return this.http.post<any>('http://127.0.0.1:8000/api/login', user);
  }

  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('token');
  }

  /*getNavigation(){
    if (localStorage.getItem('role')) {
      if (localStorage.getItem('role') == 'ROLE_admin'){
       this.navigatePath = ['/users'];
      }
      this.router.navigate(this.navigatePath);
    }
  }*/
}
