import { Component, OnInit } from '@angular/core';
import {groupeCompetences} from '../../Models/groupeCompetences.model';
import {RepositoryService} from '../../repository.service';

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.css']
})
export class ListGroupeCompetenceComponent implements OnInit {

  // @ts-ignore
  groupComp: groupeCompetences [] = [];
  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    // @ts-ignore
    // this.groupComp = this.repoService.getAllgroupComp();
    this.repoService.getAllgroupComp('http://127.0.0.1:8000/api/admin/groupeCompetence').subscribe(
      response => {
        for (const g of response){
          console.log(response);
          // @ts-ignore
          const groupsComp = new groupeCompetences();
          groupsComp.deserializable(g);
          this.groupComp.push(groupsComp);
        }
        console.log(this.groupComp);
      },
      error => console.log(error)
    );
  }
}
