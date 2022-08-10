import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from 'src/hero.service'; 
import { MessageService } from 'src/message.service'; 
import { Items } from '../items';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  items: Items[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}