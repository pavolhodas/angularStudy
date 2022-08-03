import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from 'src/items.service';
import { outputAst } from '@angular/compiler';

let  btnShow = document.querySelector('money');



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Items[] = [];
  

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void{
    this.itemsService.getItems()
      .subscribe(items => this.items = items)
  }

}