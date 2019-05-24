import { Film } from './../core/models/film.model'
import { FilmsService } from './../core/services/films.service'
import { Hero } from './../core/models/hero.model'
import { HeroService } from './../core/services/heroes.service'
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
    private hero: Hero 
    private films: Film[] = []
    private sub: any

    constructor(
        private router: ActivatedRoute,
        private heroService: HeroService,
        private filmsService: FilmsService
    ) {}

    // ngOnInit() {
    //     this.sub = this.router.params.subscribe(params =>
    //         this.heroService.getHeroById(params['id']).subscribe(hero => {
    //             this.filmsService
    //                 .getFilmsByUrls(hero.films)
    //                 .subscribe(films => {
    //                     this.films = films
    //                     this.hero = hero                        
    //                 })
    //         })
    //     )
    // }

    ngOnInit() {
      this.sub = this.router.params.subscribe(async params => {
          const hero: Hero = await this.heroService.getHeroById(params['id']).toPromise()        
          const films: Film[] = await this.filmsService.getFilmsByUrls(hero.films).toPromise()
          this.hero = hero
          this.films = films
          console.log(films)
      })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    prettyFilmsList(): string {
      return this.films.reduce((accum, film) => accum + `<a href="/#">${film.title}</a>,<br/>`, '')
  }
}
