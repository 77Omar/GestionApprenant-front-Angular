import { Component, OnInit } from '@angular/core';
import {Referentiel} from '../../Models/referentiel.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepositoryService} from '../../repository.service';
import {GroupeCompetenceService} from '../../services/groupe-competence.service';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {Users} from '../../Models/users.model';
import {SuccesUpdateComponent} from '../../succes-update/succes-update.component';

@Component({
  selector: 'app-edit-referentiel',
  templateUrl: './edit-referentiel.component.html',
  styleUrls: ['./edit-referentiel.component.css']
})
export class EditReferentielComponent implements OnInit {

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
               private dialog: MatDialog,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

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
        classes: 'myclass custom-class',
      };
    this.route.paramMap.subscribe(
      params => {
        const refId = +params.get('id');
        if (refId) {
          this.getReferentiel(refId);
        }
      });
  }
  // tslint:disable-next-line:typedef
  getReferentiel(id: number){
    this.repoService.getReferentielId(id).subscribe(
      (ref: Referentiel) => this.editReferentiels(ref),
      (error: any) => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  editReferentiels(refs: Referentiel) {
    this.CreateReferentielForm.patchValue({
      libelle: refs.libelle,
      presentation: refs.presentation,
      criteresEvaluation: refs.criteresEvaluation,
      criteresAdmission: refs.criteresAdmission,
      programme: refs.programme,
      groupeCompetence: refs.groupeCompetences
    });
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
    formData.append('_method', 'PUT');
    for (const grcomp of this.referentiels.groupeCompetences) {
      formData.append('groupeCompetence[]', grcomp.id);
    }

    if (!this.id){
      const apiUrl = 'api/admin/referentiels';
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
    else{
      this.repoService.updateReferentiel(this.id, formData).subscribe(
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
  // tslint:disable-next-line:typedef
  detectFiles(event){
    this.image = event.target.files[0];
    console.log(this.image);
  }

}
