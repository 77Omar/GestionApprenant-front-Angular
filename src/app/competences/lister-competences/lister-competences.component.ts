import { Component, OnInit } from '@angular/core';
import {Competences} from '../../Models/competences.model';
import {RepositoryService} from '../../repository.service';
import {ActivatedRoute, Params} from '@angular/router';
import {groupeCompetences} from '../../Models/groupeCompetences.model';

@Component({
  selector: 'app-lister-competences',
  templateUrl: './lister-competences.component.html',
  styleUrls: ['./lister-competences.component.css']
})
export class ListerCompetencesComponent implements OnInit {

  groupcompetence: groupeCompetences[] = [];
  competences: Competences[] = [];
  niveaucomp: any = [];
  constructor( private repoService: RepositoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.repoService.getAllgroupComp('http://127.0.0.1:8000/api/admin/groupeCompetence').subscribe(
      response => {
        for (const g of response){
          console.log(response);
          // @ts-ignore
          const groupsComp = new groupeCompetences();
          groupsComp.deserializable(g);
          this.groupcompetence.push(groupsComp);
        }
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  getCompGroups(id){
    this.competences = [];
    this.repoService.getAllgroupComp(`http://127.0.0.1:8000/api/admin/groupe_competences/${id}/competences`).subscribe(
      result => {
        for (const grC of result) {
          // @ts-ignore
          const competent = new Competences();
          competent.deserializable(grC);
          this.competences.push(competent);
        }
        console.log(this.competences);
      },
      error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  getNiveau(i: number) {
    this.niveaucomp = [];
    for (const nivocomp of this.competences[i].niveaux) {
        // @ts-ignore
        this.niveaucomp.push(nivocomp);
      }
    console.log(this.niveaucomp);
  }
}
