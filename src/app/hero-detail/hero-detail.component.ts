import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { HeroService} from 'src/hero.service';
import { Items } from '../items';
import { FItems, ITEMS } from '../mock-items';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  items = ITEMS;
  @Input() hero!: Hero;
  freeItems = FItems;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  
  sellItem(item: Items){
   
    item.isAvalible = true;
    this.hero.money += item.price;
    this.freeItems.push(item);
    const index = this.hero.items.indexOf(item);
    this.hero.items.splice(index, 1);
  
  }
}
