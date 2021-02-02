import { Component, OnInit } from '@angular/core';
import {Competences} from '../../Models/competences.model';
import {RepositoryService} from '../../repository.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupeCompetenceService} from '../../services/groupe-competence.service';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-add-competences',
  templateUrl: './add-competences.component.html',
  styleUrls: ['./add-competences.component.css']
})
export class AddCompetencesComponent implements OnInit {

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
               private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.repoService.competent);
    this.CreateCompetenceForm = new FormGroup({
      libelle: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      groupeCompetences: new FormControl(''),
      niveaux: this.fb.array([this.newNiveau()]),
    });
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
      const apiurl = 'http://127.0.0.1:8000/api/admin/competences';
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
    const control = new FormControl(null, Validators.required);
    (this.CreateCompetenceForm.get('niveaux') as FormArray).push(this.newNiveau());
  }
}
