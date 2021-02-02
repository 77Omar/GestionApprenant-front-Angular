import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('loginForm') myForm: NgForm;

  constructor( private authservice: AuthService,
               private router: Router, private formBuilder: FormBuilder) { }

  userData = {
    password: '',
    email: '',
  };

  public localStorage  = window.localStorage;

  loginForm: FormGroup;

  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.loginForm);
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }
  // tslint:disable-next-line:typedef
  getlogin() {
    this.authservice.gettokenlogin(this.userData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/default']);

      },
      error => console.log(error)
    );
  }
}
