import { Component, OnInit } from '@angular/core';
import {Competences} from '../../Models/competences.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RepositoryService} from '../../repository.service';
import {GroupeCompetenceService} from '../../services/groupe-competence.service';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {groupeCompetences} from '../../Models/groupeCompetences.model';
import {SuccesUpdateComponent} from '../../succes-update/succes-update.component';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {


  competence: Competences;
  CreateCompetenceForm: FormGroup;
  groupCompetence: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  i: number;
  private dialogConfig;
  private id: any;

  constructor( private repoService: RepositoryService,
               private groupCompService: GroupeCompetenceService,
               private dialog: MatDialog,
               private fb: FormBuilder,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Modify
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.repoService.competent);
    this.CreateCompetenceForm = new FormGroup({
      libelle: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      groupeCompetences: new FormControl(''),
      niveaux: this.fb.array([this.newNiveau()]),
    });
    this.onAddSecNiveaux();
    console.log(this.CreateCompetenceForm);
    this.groupCompService.getgroupeCompetence().subscribe(
      response => {
        this.groupCompetence = response;
        console.log(this.groupCompetence.length);
        console.log(this.groupCompetence);
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
        text: 'Select groupe competence',
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
          this.getComp(groupid);
        }
      });
  }// tslint:disable-next-line:typedef
  getComp(id: number) {
    this.repoService.getCompId(id).subscribe(
      (groupe: Competences) => this.editComp(groupe),
      (error: any) => console.log(error),
    );
  }
  // tslint:disable-next-line:typedef
  editComp(groupe: Competences) { this.id = this.route.snapshot.paramMap.get('id');
                                  this.CreateCompetenceForm.patchValue({
      libelle: groupe.libelle,
      groupeCompetences: groupe.groupeCompetences,
      niveaux: groupe.niveaux
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.CreateCompetenceForm.controls[controlName].hasError(errorName);
  }

  public CreateCompetence = () => {
    for (const elm of  this.CreateCompetenceForm.controls.groupeCompetences.value){
      for (const key in elm){
        if ( elm.hasOwnProperty(key) && key !== 'id'){
          delete elm[key];
        }
      }
    }
    // @ts-ignore
    this.competence = new Competences(
      this.CreateCompetenceForm.value.libelle,
      this.CreateCompetenceForm.value.groupeCompetences,
      this.CreateCompetenceForm.value.niveaux
    );
    if (!this.id){
      const apiurl = 'api/admin/competences';
      this.repoService.PostDataCompetences(apiurl, this.competence).subscribe(
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
      this.repoService.UpdateCompetence(this.id, this.competence).subscribe(
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
  newNiveau(): FormGroup  {
    return this.fb.group({
      libelle: '',
      critereEvaluation: '',
      groupeAction: '',
    });
  }
  // tslint:disable-next-line:typedef
  getNiveauxSecCtr(){
    return (this.CreateCompetenceForm.get('niveaux') as FormArray).controls;
  }
  // tslint:disable-next-line:typedef
  onAddSecNiveaux(){
    for (let i = 0; i < 2; i++ ) {
      (this.CreateCompetenceForm.get('niveaux') as FormArray).push(this.newNiveau());
    }
  }
}
