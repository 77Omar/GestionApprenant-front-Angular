import { Component, OnInit } from '@angular/core';
import {Profils} from '../../Models/profils.model';
import {RepositoryService} from '../../repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-profil-de-sortie',
  templateUrl: './list-profil-de-sortie.component.html',
  styleUrls: ['./list-profil-de-sortie.component.css']
})
export class ListProfilDeSortieComponent implements OnInit {

  profils: Profils[] = [];
  constructor( private repoService: RepositoryService,
               private router: Router) { }

  ngOnInit(): void {
    this.repoService.getprofilData('api/admin/profilsorties').subscribe(
      response => {
        for (const p of response){
          console.log(response);
          // @ts-ignore
          const profil = new Profils();
          profil.deserializable(p);
          this.profils.push(profil);
        }
        console.log(this.profils);
      },
      error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  editprofil(pId: number){
    this.router.navigate(['/profilSortie', pId]);
  }
}
