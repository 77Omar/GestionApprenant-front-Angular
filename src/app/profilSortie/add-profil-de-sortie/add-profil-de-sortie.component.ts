import { Component, OnInit } from '@angular/core';
import {Profils} from '../../Models/profils.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepositoryService} from '../../repository.service';

@Component({
  selector: 'app-add-profil-de-sortie',
  templateUrl: './add-profil-de-sortie.component.html',
  styleUrls: ['./add-profil-de-sortie.component.css']
})
export class AddProfilDeSortieComponent implements OnInit {

  profils: Profils;
  public CreateForm: FormGroup;
  constructor( private repoService: RepositoryService) { }

  ngOnInit(): void {
    console.log(this.repoService.profils);
    // @ts-ignore
    this.CreateForm = new FormGroup({
      libelle: new FormControl(null, [Validators.required, Validators.maxLength(60)])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.CreateForm.controls[controlName].hasError(errorName);
  }

  public createProfil = () => {

    if (this.CreateForm.valid) {
      this.profils = new Profils(
        this.CreateForm.value.libelle,
      );
      const apiUrl = 'api/admin/profilsorties';
      this.repoService.createprofil(apiUrl, this.profils).subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
    }
  }
}
