import { Component, OnInit } from '@angular/core';
import {Profils} from '../../Models/profils.model';
import {Users} from '../../Models/users.model';
import {RepositoryService} from '../../repository.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  profils: Profils[] = [];
  private deleteId: number;
  constructor( private repoService: RepositoryService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.repoService.getprofilData('http://localhost:8000/api/admin/profils?isDeleted=false').subscribe(
      response => {
        for (const p of response){
          console.log(response);
          // @ts-ignore
          const profil = new Profils();
          profil.deserializable(p);
          this.profils.push(profil);
        }
        console.log(this.profils);
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  openDelete(targetModal, p: Profils) {
    this.deleteId = p.id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    this.dialog.open(targetModal);
  }
  // tslint:disable-next-line:typedef
  onDelete(){
    this.repoService.deleteProfil(this.deleteId).subscribe(
      (results) => {
        this.ngOnInit();
      }
    );
  }

}
