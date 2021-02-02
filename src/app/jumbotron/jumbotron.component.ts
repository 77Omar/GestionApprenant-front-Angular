import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private auhService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin() {

  }
  onLogout(){
     localStorage.removeItem('token');
     this.router.navigate(['authentification']);
  }

}
