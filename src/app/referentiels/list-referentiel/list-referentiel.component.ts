import {Component , OnInit} from '@angular/core';
import {Referentiel} from '../../Models/referentiel.model';
import {RepositoryService} from '../../repository.service';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {

  referentiels: Referentiel[] = [];

  constructor( private repoService: RepositoryService ) { }

  ngOnInit(): void {
    this.repoService.getAllReferentiel('api/admin/referentiels').subscribe(
      response => {
        for (const r of response) {
          console.log(response);
          // @ts-ignore
          const referentiel = new Referentiel();
          referentiel.deserializable(r);
          this.referentiels.push(referentiel);
        }
        console.log(this.referentiels);
      },
      error => console.log(error)
    );

  }

}
