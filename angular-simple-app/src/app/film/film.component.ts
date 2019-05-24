import { ActivatedRoute } from '@angular/router'
import { FilmsService } from './../core/services/films.service'
import { Component, OnInit } from '@angular/core'
import { Film } from '../core'

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
    sub: any
    private film: Film

    constructor(
        private filmService: FilmsService,
        private router: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.sub = this.router.params.subscribe(params =>
            this.filmService
                .getFilm(`https://swapi.co/api/films/${params['id']}`)
                .subscribe(film => (this.film = film))
        )
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe()      
    }
}
