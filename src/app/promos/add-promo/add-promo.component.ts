import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Promo} from '../../Models/promo.model';
import {RepositoryService} from '../../repository.service';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';
import {ReferentielsService} from '../../services/referentiels.service';
import { find, get, pull } from 'lodash';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.css']
})
export class AddPromoComponent implements OnInit {

  private id: any;
  private dialogConfig;
  CreatePromoForm: FormGroup;
  promos: Promo;
  referentiels: any = [];
  selectedItems = [];
  dropdownSettings: any = {};
  items: any = [];


  constructor( private repoService: RepositoryService,
               private referentielService: ReferentielsService,
               private dialog: MatDialog,
               private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.repoService.promo);
    this.CreatePromoForm = new FormGroup({
      langue: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      titre: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl( '', [Validators.required, Validators.maxLength(60)]),
      lieu: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      referenceAgate: new FormControl( '', [Validators.required, Validators.maxLength(60)]),
      fabrique: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateDebut: new FormControl( ''),
      dateFin: new FormControl( ''),
      referentiel: new FormControl(  ''),
      apprenant: new FormControl(''),

    });

    console.log(this.CreatePromoForm);
    this.referentielService.getReferentiels().subscribe(
      response => {
        this.referentiels = response;
        console.log(this.referentiels.length);
        console.log(this.referentiels);
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
        text: 'Select Referentiel',
        primaryKey: 'id',
        labelKey: 'libelle',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        enableSearchFilter: true,
        classes: 'myclass custom-class'
      };
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.CreatePromoForm.controls[controlName].hasError(errorName);
  }

  public CreatePromo = () => {
    for (const elm of this.CreatePromoForm.controls.referentiel.value) {
      for (const key in elm){
        if ( elm.hasOwnProperty(key) && key !== 'id') {
          delete elm[key];
        }
      }
    }
    // @ts-ignore
    this.promos = new Promo(
      this.CreatePromoForm.value.langue,
      this.CreatePromoForm.value.titre,
      this.CreatePromoForm.value.description,
      this.CreatePromoForm.value.lieu,
      this.CreatePromoForm.value.referenceAgate,
      this.CreatePromoForm.value.fabrique,
      this.CreatePromoForm.value.dateDebut,
      this.CreatePromoForm.value.dateFin,
      this.CreatePromoForm.value.referentiel,
    );

    const formData = new FormData();
    formData.append('langue', this.promos.langue);
    formData.append('titre', this.promos.titre);
    formData.append('description', this.promos.description);
    formData.append('lieu', this.promos.lieu);
    formData.append('referenceAgate', this.promos.referenceAgate);
    formData.append('fabrique', this.promos.fabrique);
    // @ts-ignore
    formData.append('dateDebut', this.promos.dateDebut);
    // @ts-ignore
    formData.append('dateFin', this.promos.dateFin);
    // @ts-ignore
    for (const ref of this.promos.referentiel) {
      formData.append('referentiel[]', ref.id);
    }
    if (this.items.length > 0 ) {
      for (const item of this.items) {
        formData.append('apprenant[]', item);
      }
    }
    if (!this.id){
      const apiUrl = 'api/admin/promos';
      this.repoService.PostPromo(apiUrl, formData).subscribe(
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
}
