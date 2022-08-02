import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from 'src/items.service';
import { MessageService } from 'src/message.service'; 


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Items[] = [];
  selectedItem?: Items;

  onSelect(item: Items): void {
    this.selectedItem = item;
    this.messageService.add(`ItemsComponent: Selected items id=${item.id}`);
  }

  constructor(private itemsService: ItemsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void{
    this.itemsService.getItems()
      .subscribe(items => this.items = items)
  }
}
