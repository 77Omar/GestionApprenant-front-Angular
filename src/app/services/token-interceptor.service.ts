import {Injectable, Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor( private injector: Injector) { }

  // tslint:disable-next-line:typedef
  intercept(req, next) {
    const authService = this.injector.get(AuthService);
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
        Accept: 'Application/json'
      }
    });
    return next.handle(tokenReq);
  }

}
