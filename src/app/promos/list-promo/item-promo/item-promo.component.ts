import {Component, Input, OnInit} from '@angular/core';
import {Promo} from '../../../Models/promo.model';

@Component({
  selector: 'app-item-promo',
  templateUrl: './item-promo.component.html',
  styleUrls: ['./item-promo.component.css']
})
export class ItemPromoComponent implements OnInit {

  @Input() promo: Promo;
  constructor() { }

  ngOnInit(): void {
  }

}
