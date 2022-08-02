import { Injectable } from '@angular/core';
import { Items } from './app/items';
import { ITEMS } from './app/mock-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  getItems(): Observable<Items[]> {
    const items = of(ITEMS);
    this.messageService.add('ItemsService: fetched items');
    return items;
  }

  constructor(private messageService: MessageService) { }
}
