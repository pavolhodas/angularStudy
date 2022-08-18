import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../items';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {

  @Output() deleteEvent = new EventEmitter<Items>();
  @Input() items?: Items;
  constructor() { }

  deleteItem(item: Items) {
    this.deleteEvent.emit(item);
  }

  ngOnInit(): void {
  }

}
