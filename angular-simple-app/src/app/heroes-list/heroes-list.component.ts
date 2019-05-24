import { Hero } from './../core/models/hero.model'
import { HeroService } from './../core/services/heroes.service'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
    private heroes: Hero[]

    constructor(
        private heroesService: HeroService,
    ) {}

    ngOnInit() {
        this.heroesService.getList().subscribe(heroes => {
            this.heroes = heroes
        })
    }
}
