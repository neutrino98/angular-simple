import { Hero } from './../core/models/hero.model';
import { HeroService } from './../core/services/heroes.service';
import { Component, OnInit } from '@angular/core'

const mockedHeroes: Hero[] = [
  {
    name: 'Luk', 
    mass: 145,  
    height: 190,
    gender: 'male'
  }, 
  {
    name: 'Ivan', 
    mass: 125,  
    height: 160,
    gender: 'male'
  }
]


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  private heroes: Hero[]

  constructor(private heroesService: HeroService) {
    //this.heroes = mockedHeroes; 
  }

  ngOnInit() {
    this.heroesService.getList().subscribe((heroes) => {
      console.log(heroes)
      this.heroes = heroes
    })
  }
}
