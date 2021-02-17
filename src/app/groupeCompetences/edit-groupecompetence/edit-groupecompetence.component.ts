import { Component, OnInit } from '@angular/core';
import {groupeCompetences} from '../../Models/groupeCompetences.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepositoryService} from '../../repository.service';
import {CompetencesService} from '../../services/competences.service';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {SuccesUpdateComponent} from '../../succes-update/succes-update.component';

@Component({
  selector: 'app-edit-groupecompetence',
  templateUrl: './edit-groupecompetence.component.html',
  styleUrls: ['./edit-groupecompetence.component.css']
})
export class EditGroupecompetenceComponent implements OnInit {

  groupCompetence: groupeCompetences;
  CreategroupCompForm: FormGroup;
  competence: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  private id: any;
  private dialogConfig;
  constructor( private repoService: RepositoryService,
               private CompService: CompetencesService,
               private dialog: MatDialog,
               private route: ActivatedRoute) {}


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

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

    this.route.paramMap.subscribe(
      params => {
        const groupid = +params.get('id');
        if (groupid) {
          this.getGroupComp(groupid);
        }
      });
  }

  // tslint:disable-next-line:typedef
  getGroupComp(id: number) {
    this.repoService.getGroupCompId(id).subscribe(
      (groupe: groupeCompetences) => this.editgroupeComp(groupe),
      (error: any) => console.log(error),
    );
  }
  // tslint:disable-next-line:typedef
  editgroupeComp(groupe: groupeCompetences) {
    this.CreategroupCompForm.patchValue({
      libelle: groupe.libelle,
      descriptif: groupe.descriptif,
      competences: groupe.competences
    });
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
    else{
      this.repoService.UpdateGroupComp(this.id, this.groupCompetence).subscribe(
        response => {
          const dialogUsers = this.dialog.open(SuccesUpdateComponent, this.dialogConfig);
          dialogUsers.afterClosed()
            .subscribe(result => {
              console.log(result);
            });
        }
      );
    }
  }

}
