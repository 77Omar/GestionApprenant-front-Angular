import { Component, OnInit } from '@angular/core';
import {Users} from '../../Models/users.model';
import {RepositoryService} from '../../repository.service';
import {ProfilService} from '../../services/profil.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user: Users;
  profil: any;

  private id: any;
  public myAngularxQrCode = 'zoooo';
  detailUsers: any;

  constructor( private profilService: ProfilService,
               private repoService: RepositoryService,
               private route: ActivatedRoute) {}

  // tslint:disable-next-line:typedef
  ngOnInit()  {
    this.myAngularxQrCode = 'Your QR code data string';
    // Modify
    this.id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.repoService.getUsersId(this.id).subscribe(
      response => {
           this.detailUsers = response;
      }
    );
  }
}
