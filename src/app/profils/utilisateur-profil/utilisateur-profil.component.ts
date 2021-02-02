import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../../repository.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-utilisateur-profil',
  templateUrl: './utilisateur-profil.component.html',
  styleUrls: ['./utilisateur-profil.component.css']
})
export class UtilisateurProfilComponent implements OnInit {
  usersProfil: any;

  constructor(private repoService: RepositoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
     ( response: Params) => {
       const id = + response.id;

       this.repoService.getProfilUsers(id).subscribe(
         // tslint:disable-next-line:no-shadowed-variable
         (response) => {
           this.usersProfil = response;
           console.log(this.usersProfil);
         }
       );
     }
    );
  }
}
