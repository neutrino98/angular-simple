import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HeroesListComponent } from './heroes-list/heroes-list.component'

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesListComponent,
  },
  {
    path: 'hero/:id', 
    component: HeroComponent, 
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

