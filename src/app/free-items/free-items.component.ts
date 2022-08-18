import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ITEMS } from '../mock-items';
import { HeroService } from 'src/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from 'src/items.service';
import { FItems } from '../mock-items';


@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})
export class FreeItemsComponent implements OnInit {

  @Input() hero?: Hero;
  items = ITEMS;
  fItems = FItems;

  constructor(private heroService: HeroService,private route: ActivatedRoute, private itemService: ItemsService ) { }

  ngOnInit(): void {
    this.getHero();
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  buyFreeItem(item: Items): void {
    if(this.hero != null){
      if(this.hero?.money >= item.price){
          this.hero.money -= item.price;
          this.hero.items.push(item);
          const index = this.fItems.indexOf(item);
          this.fItems.splice(index, 1);
          item.isAvalible = false;
      }
    }
  }

}
