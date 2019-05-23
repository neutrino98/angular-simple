import { HeroService } from './../core/services/heroes.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  constructor(private heroesService: HeroService) {
    console.log("heroes")
  }

  ngOnInit() {
    //this.apiService.get('people').subscribe()
  }
}
