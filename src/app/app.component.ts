import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilRougeAngular';
  constructor(private  authService: AuthService) {}

  // tslint:disable-next-line:typedef
  isConnect(){
    return this.authService.getToken();
  }
}


