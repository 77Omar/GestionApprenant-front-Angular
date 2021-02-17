import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../Models/users.model';
import {RepositoryService} from '../../repository.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SearchService} from '../../services/search.service';
import {TriService} from '../../services/tri.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @Input() receiveSearchFromApp = '';
  search = '';

  private deleteId: number;
  users: Users[] = [];
  contentDetails: any;
  closeResult: any;
  startIndex = 0;
  endIndex = 6;


  // tslint:disable-next-line:max-line-length
  constructor( private repoService: RepositoryService, private searchSrv: SearchService, private triService: TriService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
      this.repoService.getData('api/admin/users').subscribe(
        response => {
             for (const u of response){
               console.log(response);
               // @ts-ignore
               const user = new Users();
               user.deserializable(u);
               this.users.push(user);
             }
             // Trier tableau
             this.triService.triUser(this.users);
             console.log(this.users);
        },
        error => console.log(error)
      );

      this.newValue();
      this.searchSrv.currentSearch.subscribe(search => this.search = search);
      }
  // tslint:disable-next-line:typedef
      newValue() {
       this.searchSrv.changeValue('');
      }

  // tslint:disable-next-line:typedef
  getArrayFromNumber(length){
    return new Array(5 );
  }
  // tslint:disable-next-line:typedef
  updateIndex(pageIndex){
    this.startIndex = pageIndex * 6;
    this.endIndex = this.startIndex + 6;
  }

  // tslint:disable-next-line:typedef
  editButtonclick(uId: number){
    this.router.navigate(['/users', uId]);
  }
// tslint:disable-next-line:typedef
  detailButtonclick(uId: number){
    this.router.navigate(['users/detail', uId]);
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

}
