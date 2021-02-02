import { Component, OnInit } from '@angular/core';
import {Profils} from '../../Models/profils.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepositoryService} from '../../repository.service';
import {ActivatedRoute} from '@angular/router';
import {Users} from '../../Models/users.model';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-edit-list-profil-sortie',
  templateUrl: './edit-list-profil-sortie.component.html',
  styleUrls: ['./edit-list-profil-sortie.component.css']
})
export class EditListProfilSortieComponent implements OnInit {

  profils: Profils;
  public CreateForm: FormGroup;
  private id: any;
  private dialogConfig;
  constructor( private repoService: RepositoryService,
               private route: ActivatedRoute,
               private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.repoService.profils);
    // @ts-ignore
    this.CreateForm = new FormGroup({
      libelle: new FormControl(null, [Validators.required, Validators.maxLength(60)])
    });
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    },
    /*Modify*/
    this.route.paramMap.subscribe(
      params => {
        const profilId = +params.get('id');
        if (profilId) {
          this.getprSortie(profilId);
        }
      });
  }
  // tslint:disable-next-line:typedef
  getprSortie(id: number){
    // @ts-ignore
    this.repoService.UpdateProfiSortilId(id).subscribe(
      (profil: Profils) => this.editPrSortie(profil),
      (error: any) => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  editPrSortie(profil: Profils) {
    this.CreateForm.patchValue({
      libelle: profil.libelle,
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.CreateForm.controls[controlName].hasError(errorName);
  }

  public createProfil = () => {

      this.profils = new Profils(
        this.CreateForm.value.libelle,
      );
      if (!this.id){
      const apiUrl = 'http://localhost:8000/api/admin/profilsorties';
      this.repoService.createprofil(apiUrl, this.profils).subscribe(
        response => {
          const dialogPrSortie = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
          dialogPrSortie.afterClosed().subscribe(
            result => {
              console.log(result);
            }
          );
        },
        error => console.log(error)
      );
    }
    else{
        this.repoService.UpdateProfiSortill(this.id, this.profils).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

}
