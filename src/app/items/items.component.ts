import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from 'src/items.service';
import { outputAst } from '@angular/compiler';
import { HEROES } from '../mock-heroes';
import { FItems, ITEMS } from '../mock-items';

let  btnShow = document.querySelector('money');



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = FItems;
  selectedItem?: Items;

  onSelect(item: Items): void {
    this.selectedItem = item;
  }

constructor() { }
ngOnInit(): void { }
}