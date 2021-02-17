import { Component, OnInit } from '@angular/core';
import {Profils} from '../../Models/profils.model';
import {RepositoryService} from '../../repository.service';
import {ProfilService} from '../../services/profil.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

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
      const apiUrl = 'api/admin/profils';
      this.repoService.createprofil(apiUrl, this.profils).subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );
    }
  }
}
