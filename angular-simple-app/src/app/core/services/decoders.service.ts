import { Hero } from '../models'
import { Injectable } from '@angular/core';

@Injectable()
export class DecodersService {

  constructor() { }

  decodeHero(data: any): Hero {
    return {
      name: data.name,
      mass: data.mass,
      height: data.height,
      gender: data.gender,
    }
  }
}
