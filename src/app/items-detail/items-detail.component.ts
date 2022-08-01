import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../items';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css']
})
export class ItemsDetailComponent implements OnInit {

  @Input() items?: Items;
  constructor() { }

  ngOnInit(): void {
  }

}
