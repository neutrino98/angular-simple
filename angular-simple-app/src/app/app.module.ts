import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HeroesListComponent } from './heroes-list/heroes-list.component'
import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { FilmComponent } from './film/film.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HeroesListComponent, HeroComponent, FilmComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
