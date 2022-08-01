import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemsComponent } from './items/items.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ItemsComponent,
    HeroDetailComponent,
    ItemsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
