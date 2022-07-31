import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ITEMS } from '../mock-items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  selectedItem?: Items;
  
  onSelect(item: Items): void {
    this.selectedItem = item;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
