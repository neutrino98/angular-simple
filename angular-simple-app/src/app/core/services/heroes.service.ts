import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { Observable, from } from 'rxjs'
import { Hero } from '../models'
import { map } from 'rxjs/operators'

@Injectable()
export class HeroService {
  constructor(private apiService: ApiService) {}

  getList(): Observable<Hero[]> {
    return this.apiService.get('https://swapi.co/api/people').pipe(
      map(data => data.results),
      map(items => items.map(item => this.decodeHero(item)))
    )
  }

  getHeroById(id: string): Observable<Hero> {
    return this.apiService
      .get(`https://swapi.co/api/people/${id}`)
      .pipe(map(data => this.decodeHero(data)))
  }

  decodeHero(data: any): Hero {
    return {
      name: data.name,
      mass: data.mass,
      height: data.height,
      gender: data.gender,
      id: data.url.split('/').reverse()[1],
      films: data.films,
    }
  }
}
