import { Injectable } from '@angular/core'
import { ApiService } from './api.service'
import { Observable, from } from 'rxjs'
import { Hero } from '../models'
import { map } from 'rxjs/operators'
import { DecodersService } from './decoders.service'

@Injectable()
export class HeroService {
  constructor(
    private apiService: ApiService,
    private decodersService: DecodersService
  ) {}

  getList(): Observable<Hero[]> {
    return this.apiService.get('people').pipe(
      map(data => data.results),
      map(items => items.map(item => this.decodersService.decodeHero(item)))
    )
  }

  getHeroById(id: number): Observable<Hero> {
    return this.apiService
      .get(`people/${id}`)
      .pipe(map(data => this.decodersService.decodeHero(data)))
  }
}
