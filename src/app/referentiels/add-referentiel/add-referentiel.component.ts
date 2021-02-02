import { Component, OnInit } from '@angular/core';
import {Referentiel} from '../../Models/referentiel.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepositoryService} from '../../repository.service';
import {GroupeCompetenceService} from '../../services/groupe-competence.service';
import {MatDialog} from '@angular/material/dialog';
import {groupeCompetences} from '../../Models/groupeCompetences.model';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  private id: any;
  private dialogConfig;
  image: any;
  referentiels: Referentiel;
  CreateReferentielForm: FormGroup;
  groupCompetence: any = [];
  selectedItems = [];
  dropdownSettings: any = {};

  constructor( private repoService: RepositoryService,
               private groupCompService: GroupeCompetenceService,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.repoService.referentiel);
    this.CreateReferentielForm = new FormGroup({
      libelle: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      presentation: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      criteresEvaluation: new FormControl( '', [Validators.required, Validators.maxLength(60)]),
      criteresAdmission: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      programme: new FormControl( ''),
      groupeCompetence: new FormControl(  ''),
    });
    console.log(this.CreateReferentielForm);
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
    return this.CreateReferentielForm.controls[controlName].hasError(errorName);
  }

  public CreateReferentiel = () => {
     for (const elm of this.CreateReferentielForm.controls.groupeCompetence.value) {
       for (const key in elm){
          if ( elm.hasOwnProperty(key) && key !== 'id') {
            delete elm[key];
          }
       }
     }
    // @ts-ignore
     this.referentiels = new Referentiel(
        this.CreateReferentielForm.value.libelle,
        this.CreateReferentielForm.value.presentation,
        this.CreateReferentielForm.value.criteresEvaluation,
        this.CreateReferentielForm.value.criteresAdmission,
        this.CreateReferentielForm.value.programme,
        this.CreateReferentielForm.value.groupeCompetence,
    );
     const formData = new FormData();
     formData.append('libelle', this.referentiels.libelle);
     formData.append('presentation', this.referentiels.presentation);
     formData.append('criteresEvaluation', this.referentiels.criteresEvaluation);
     formData.append('criteresAdmission', this.referentiels.criteresAdmission);
     formData.append('programme', this.image);
     for (const grcomp of this.referentiels.groupeCompetences) {
      formData.append('groupeCompetence[]', grcomp.id);
      }
     // console.log(this.referentiels.groupeCompetences);

     if (!this.id){
      const apiUrl = 'http://127.0.0.1:8000/api/admin/referentiels';
      this.repoService.PostReferentiels(apiUrl, formData).subscribe(
        response => {
          const dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          dialogRef.afterClosed()
            .subscribe(result => {
              console.log(result);
            });
        },
        error => console.log(error)
      );
    }
  }
  // tslint:disable-next-line:typedef
  detectFiles(event){
    this.image = event.target.files[0];
    console.log(this.image);
  }
}
