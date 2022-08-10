import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { FreeItemsComponent } from './app/free-items/free-items.component';
import { HeroDetailComponent } from './app/hero-detail/hero-detail.component';
import { ItemsComponent } from './app/items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'items', component: ItemsComponent },
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'free-items/:id', component: FreeItemsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
