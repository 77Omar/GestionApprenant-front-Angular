import { Component, OnInit } from '@angular/core';
import {Competences} from '../../Models/competences.model';
import {RepositoryService} from '../../repository.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
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
  constructor( private repoService: RepositoryService, private router: Router) { }

  ngOnInit(): void {
    this.repoService.getAllgroupComp('api/admin/groupeCompetence').subscribe(
      response => {
        for (const g of response){
          console.log(response);
          // @ts-ignore
          const groupsComp = new groupeCompetences();
          groupsComp.deserializable(g);
          this.groupcompetence.push(groupsComp);
        }
        this.getCompGroups(this.groupcompetence[0].id);
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  getCompGroups(id){
    this.competences = [];
    this.repoService.getAllgroupComp(`api/admin/groupe_competences/${id}/competences`).subscribe(
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
  // tslint:disable-next-line:typedef
  EditButtonclick(uId: number){
    this.router.navigate(['/competences', uId]);
  }
}
