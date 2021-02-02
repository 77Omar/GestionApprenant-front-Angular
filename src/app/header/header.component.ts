import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auhService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions typedef
    jQuery(function($) {

      // tslint:disable-next-line:typedef
      $('.sidebar-dropdown > a').click(function() {
        $('.sidebar-submenu').slideUp(200);
        if (
          $(this)
            .parent()
            .hasClass('active')
        ) {
          $('.sidebar-dropdown').removeClass('active');
          $(this)
            .parent()
            .removeClass('active');
        } else {
          $('.sidebar-dropdown').removeClass('active');
          $(this)
            .next('.sidebar-submenu')
            .slideDown(200);
          $(this)
            .parent()
            .addClass('active');
        }
      });

      // tslint:disable-next-line:only-arrow-functions typedef
      $('#close-sidebar').click(function() {
        $('.page-wrapper').removeClass('toggled');
      });
      // tslint:disable-next-line:only-arrow-functions typedef
      $('#show-sidebar').click(function() {
        $('.page-wrapper').addClass('toggled');
      });

    });
  }

  // tslint:disable-next-line:typedef
  onLogout() {
     localStorage.removeItem('token');
     this.router.navigate(['authentification']);
  }
}
