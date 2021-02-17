import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {groupeCompetences} from '../../Models/groupeCompetences.model';
import {RepositoryService} from '../../repository.service';
import {CompetencesService} from '../../services/competences.service';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';


@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
})
export class AddGroupeCompetenceComponent implements OnInit {
  groupCompetence: groupeCompetences;
  CreategroupCompForm: FormGroup;
  competence: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  private id: any;
  private dialogConfig;
  constructor( private repoService: RepositoryService,
               private CompService: CompetencesService,
               private dialog: MatDialog) {}


  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log(this.repoService.groupsComp);
    this.CreategroupCompForm = new FormGroup({
      libelle: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      descriptif: new FormControl( '', [Validators.required, Validators.maxLength(60)]),
      competences: new FormControl(  '')
    });
    console.log(this.CreategroupCompForm);
    this.CompService.getCompetence().subscribe(
      response => { this.competence = response;
                    console.log(this.competence.length);
                    console.log(this.competence);

    }
    );
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    },
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Competences',
      primaryKey: 'id',
      labelKey: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.CreategroupCompForm.controls[controlName].hasError(errorName);
  }

  public CreategroupComp = () => {
    // Recuperation id des competences
    for (const elm of  this.CreategroupCompForm.controls.competences.value){
      for (const key in elm){
        if ( elm.hasOwnProperty(key) && key !== 'id'){
          delete elm[key];
        }
      }
    }
    // console.log( this.CreategroupCompForm.controls.competences.value);
           // @ts-ignore
    // @ts-ignore
    this.groupCompetence = new groupeCompetences(
             this.CreategroupCompForm.value.libelle,
             this.CreategroupCompForm.value.descriptif,
             this.CreategroupCompForm.value.competences
           );
    // console.log(this.groupCompetence);
    if (!this.id){
      const apiUrl = 'api/admin/groupeCompetence';
      this.repoService.PostgroupComp(apiUrl, this.groupCompetence).subscribe(
        response => {
          const dialogUsers = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          dialogUsers.afterClosed()
            .subscribe(result => {
              console.log(result);
            });
        },
        error => console.log(error)
      );
    }
  }
}
