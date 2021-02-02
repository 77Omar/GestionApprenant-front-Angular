import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../../repository.service';
import {Promo} from '../../Models/promo.model';

@Component({
  selector: 'app-list-promo',
  templateUrl: './list-promo.component.html',
  styleUrls: ['./list-promo.component.css']
})
export class ListPromoComponent implements OnInit {

  Promo: Promo [] = [];
  constructor( private repoService: RepositoryService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.repoService.getAllPromo('http://127.0.0.1:8000/api/admin/promo').subscribe(
      response => {
         for (const p of response){
           console.log(response);
           // @ts-ignore
           const promos = new Promo();
           promos.deserializable(p);
           this.Promo.push(promos);
         }
         console.log(this.Promo);
      },
         error => console.log(error)
    );
  }
}
