import { Component, OnInit } from '@angular/core';
import {Users} from '../../Models/users.model';
import {RepositoryService} from '../../repository.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  private deleteId: number;
  users: Users[] = [];
  contentDetails: any;
  closeResult: any;

  constructor( private repoService: RepositoryService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
      this.repoService.getData('http://localhost:8000/api/admin/users').subscribe(
        response => {
             for (const u of response){
               console.log(response);
               // @ts-ignore
               const user = new Users();
               user.deserializable(u);
               this.users.push(user);
             }
             console.log(this.users);
        },
        error => console.log(error)
      );
      }

 /* transform(encodeImage): any{
    if (encodeImage){
      encodeImage = 'data:image/jpeg;base64,' + encodeImage;
    }else {
      encodeImage = '../../../assets/picture/sonatel.jpg';
    }
    return encodeImage;
  }*/

  // tslint:disable-next-line:typedef
  editButtonclick(uId: number){
    this.router.navigate(['/users', uId]);
  }
// tslint:disable-next-line:typedef
  detailButtonclick(uId: number){
    this.router.navigate(['/users', uId]);
  }

  // tslint:disable-next-line:typedef
  openDelete(targetModal, u: Users) {
    this.deleteId = u.id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(targetModal);
  }

  // tslint:disable-next-line:typedef
  onDelete() {
    this.repoService.delete(this.deleteId).subscribe(
      (results) => {
        this.ngOnInit();
      }
    );
  }
  /*
     redirectToDetails(id: any) {
    this._id = id;
    this.repoService.users = id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(EdituserComponent, dialogConfig);
  }*/

}
