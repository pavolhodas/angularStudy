import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from 'src/messages/messages.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { ItemsComponent } from './items/items.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from 'src/dashboard/dashboard.component';
import { FreeItemsComponent } from './free-items/free-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    ItemsComponent,
    ItemsDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FreeItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }