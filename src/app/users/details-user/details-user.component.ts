import { Component, OnInit } from '@angular/core';
import {Users} from '../../Models/users.model';
import {RepositoryService} from '../../repository.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../../services/profil.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from '../../success-dialog/success-dialog.component';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user: Users;
  profil: any;
  image: any;
  imgURL: any;
  private id: any;

  private dialogConfig;

  public CreateForm: FormGroup;

  constructor( private profilService: ProfilService,
               private repoService: RepositoryService,
               private route: ActivatedRoute,
               private dialog: MatDialog) { }

  profilControl = new FormControl('', Validators.required);


  // tslint:disable-next-line:typedef
  ngOnInit()  {

    // Modify
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.repoService.users);
    this.CreateForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl( '', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl( '', [Validators.required, Validators.email]),
      avatar: new FormControl( '', ),
      profils: new FormControl( '', [Validators.required]),
      id: new FormControl( ''),
    });
    console.log(this.CreateForm);
    this.profilService.getProfils().subscribe(
      response => {this.profil = response;
                   console.log(this.profil.length);
                   console.log(this.profil);
      },
    );
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.CreateForm.controls[controlName].hasError(errorName);
  }

  public createUsers = () => {

    // if (this.CreateForm.valid) {
    this.user = new Users(
      this.CreateForm.value.firstName,
      this.CreateForm.value.lastName,
      this.CreateForm.value.email,
      this.CreateForm.value.avatar,
      this.CreateForm.value.password,
      this.CreateForm.value.profils,
      this.CreateForm.value.path,
      this.CreateForm.value.id,
    );
    const formData = new FormData();
    formData.append('firstName', this.user.firstName);
    formData.append('lastName', this.user.lastName);
    formData.append('email', this.user.email);
    formData.append('avatar', this.image);
    formData.append('password', this.user.password);
    // @ts-ignore
    formData.append('profils', this.user.profil);
    if (!this.id){
      const apiUrl = 'http://127.0.0.1:8000/api/admin/users';
      this.repoService.create(apiUrl, formData).subscribe(
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
    // }   // Modify
    else{
      this.repoService.create(this.id, formData).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  detectFiles(event){
    this.image = event.target.files[0];
    console.log(this.image);
    const reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL(this.image);
    reader.onload = () => {
      this.imgURL = reader.result;
      console.log(this.imgURL);
    };
  }

}
