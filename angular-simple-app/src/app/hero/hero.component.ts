import { Film } from './../core/models/film.model'
import { FilmsService } from './../core/services/films.service'
import { Hero } from './../core/models/hero.model'
import { HeroService } from './../core/services/heroes.service'
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { takeUntil, map, switchMap } from 'rxjs/operators'

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
    private hero$: Observable<Hero>
    private films$: Observable<Film[]>
    destroy$ = new Subject()

    constructor(
        private router: ActivatedRoute,
        private heroService: HeroService,
        private filmsService: FilmsService
    ) {}

    ngOnInit(): void {
        this.router.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
            this.hero$ = this.heroService.getHeroById(params['id'])
            this.films$ = this.hero$.pipe(
                switchMap(hero => this.filmsService.getFilmsByUrls(hero.films))
            )
        })
    }

    ngOnDestroy(): void {
        this.destroy$.next()
    }

    prettyFilmsList(): string {
        return this.films.reduce(
            (accum, film) => accum + `<a href="/#">${film.title}</ahre>,<br/>`,
            ''
        )
    }
}
