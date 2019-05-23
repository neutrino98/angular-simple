import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ApiService, DecodersService, HeroService } from './services'

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [ApiService, DecodersService, HeroService],
})
export class CoreModule {}
