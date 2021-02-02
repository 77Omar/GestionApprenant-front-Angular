import {Component, Input, OnInit} from '@angular/core';
import {groupeCompetences} from '../../../Models/groupeCompetences.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-groupe-competence',
  templateUrl: './item-groupe-competence.component.html',
  styleUrls: ['./item-groupe-competence.component.css']
})
export class ItemGroupeCompetenceComponent implements OnInit {

  @Input() grcompetence: groupeCompetences;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  detailButtonclick(uId: number){
    this.router.navigate(['/groupeCompetences', uId]);
  }

}
