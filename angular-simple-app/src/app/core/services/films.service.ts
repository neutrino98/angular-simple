import { Film } from './../models/film.model'
import { ApiService } from './api.service'
import { Injectable } from '@angular/core'
import { Observable, forkJoin } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class FilmsService {
    constructor(private apiService: ApiService) {}

    getFilm(url: string): Observable<Film> {
        return this.apiService.get(url).pipe(map(item => this.decodeFilm(item)))
    }

    decodeFilm(data: any): Film {
        return {
            title: data.title,
            director: data.director,
            producer: data.producer,
            releaseDate: data.release_date,
        }
    }

    getFilmsByUrls(urls: string[]): Observable<Film[]> {
        return forkJoin(urls.map(url => this.getFilm(url)))
    }

    prettyFilmsList(films: Film[]): string {
        return films.reduce((accum, film) => accum + film.title + ',\n ', '')
    }
}
